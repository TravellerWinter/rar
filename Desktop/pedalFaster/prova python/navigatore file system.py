import os, os.path

QUIT = "7"

commands = ("1", "2", "3", "4", "5", "6", "7")
MENU = """
1 List the current directory
2 Move up
3 Move down
4 Number of files in the directory
5 Size of the directory in bytes
6 Search for a filename
7 Quit the program
"""

def main():
    while True:
        print(os.getcwd())
        print(MENU)
        command = acceptCommand()
        runCommand(command)
        if command == QUIT:
            print("Have a nice day")
            break

def acceptCommand():
    """ Associa a un numero il comando corrispondente"""
    command = input("Enter a number: ")
    if command in commands:
        return command
    else:
        print("ERROR: command non recognized.")
        acceptCommand()

def runCommand(command):
    if command == "1":
        listCurrentDir(os.getcwd())
    elif command == "2":
        moveUp()
    elif command == "3":
        moveDown(os.getcwd())
    elif command == "4":
        print("the total number of files is: ", countFiles(os.getcwd()))
    elif command == "5":
        print("the total number of bytes is: ", countBytes(os.getcwd()))
    elif command == "6":
        target = input("Enter the search string: ")
        fileList = findFiles(target, os.getcwd())
        if not fileList:
            print("string not found")
        else:
            for f in fileList:
                print(f)



def listCurrentDir(dirName):
    lyst = os.listdir(dirName)
    for i in lyst:
        print(i)


def moveUp():
    os.chdir("..")
    print("Now you are in the " + os.getcwd() + " dir")

def moveDown(currentDir):
    newdir = input("Enter the folder name: ")
    if os.path.exists(currentDir + os.sep + newDir) and os.path.isdir(newdir):
        os.chdir(newdir)
    else:
        print("No such name.")

def countFiles(currentDir):
    count = 0
    lyst = os.listdir(currentDir)
    for element in lyst:
        if os.path.isfile(element):
            count += 1
        else:
            os.chdir(element)
            count += countFiles(os.getcwd())
            os.chdir("..")

    return count

def countBytes(currentDir):
    count = 0
    lyst = os.listdir(currentDir)
    for element in lyst:
        if os.path.isfile(element):
            count += os.path.getsize(element)
        else:
            os.chdir(element)
            count += countBytes(os.getcwd())
            os.chdir("..")
    return count


def findFiles(target, paths):
    files = []
    lyst = os.listdir(paths)
    for element in lyst:
        if os.path.isfile(element):
            files.append(element)
        else:
            os.chdir(element)
            files.extend(findFiles(target, os.getcwd()))
            os.chdir("..")
    return files


if __name__ == "__main__":
    main()


















