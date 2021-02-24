
def main():
    f = open(input("enter the path of a file: "), "r")
    lines(f)



def lines(file):
    line = []
    for i in file:
        line.append(i)
    print("The number of lines is: ", len(line))
    visualLine(line)

def visualLine(line):

    while True:

        number = int(input("Enter a number of a line to visualize it: "))
        if number == 0:
            break
        else:
            print(line[number])



if __name__ == "__main__":
    main()
