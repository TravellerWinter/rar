import time, random
from threading import Thread, currentThread, Condition

class SharedCell(object):
    

    def __init__(self, data = 1):
        self.data = data
        self.writing = False
        self.readerCount = 0
        self.okToWrite = Condition()
        self.okToRead = Condition()
        self.result = 1

    def read(self, Rfunction):
        self.beginRead()
        self.result = Rfunction(self.result)
        self.endRead()
        return self.result

        

    def write(self, Wfunction):
        self.beginWrite()
        self.result = Wfunction(self.result)
        self.endWrite()
        return self.result

    def beginRead(self):
        self.okToRead.acquire()
        self.okToWrite.acquire()
        while self.writing or len(self.okToWrite._waiters) > 0:
            self.okToRead.wait()
        self.readerCount += 1
        self.okToRead.notify()

    def endRead(self):
        self.readerCount -= 1
        if self.readerCount == 0:
            self.okToWrite.notify()
        self.okToRead.release()
        self.okToWrite.release()

    def beginWrite(self):
        self.okToRead.acquire()
        self.okToWrite.acquire()
        while self.writing or self.readerCount != 0:
            self.okToWrite.wait()
        self.writing = True

    def endWrite(self):
        self.write = False
        if len(self.okToRead._waiters) > 0:
            self.okToRead.notify()
        else:
            self.okToWrite.notify()
        self.okToRead.release()
        self.okToWrite.release()

        

class Reader(Thread):

    def __init__(self, cell, Rfunction, n):
        Thread.__init__(self, name = "Reader" + str(n))
        self.cell = cell
        self.Rfunction = Rfunction
       

    def run(self):
        time.sleep(random.randint(1, 4))
        print(self.getName() + " is getting up")
        result = self.cell.read(lambda count: count)
        print(self.getName() + " has read the number " + str(result))




class Writer(Thread):

    def __init__(self, cell, Wfunction, n):
        Thread.__init__(self, name = "Writer" + str(n))
      
        self.Wfunction = Wfunction
        self.cell = cell

    def run(self):
        time.sleep(random.randint(1, 4))
        print(self.getName() + " is getting up")
        result = self.cell.read(lambda count: count + 1 )
        print( self.getName() + " has change the number in " + str(result))


def main():
    thR = []
    thW = []
    cell = SharedCell()
    number1 = int(input("Enter the number of reader Threads: "))
    number2 = int(input("Enter the number of writer Threads: "))
    for num in range(number1):
        thR.append(Reader(cell, 1, num + 1))
    for num in range(number2):
        thW.append(Writer(cell, 1, num + 1))
    for reader in thR:
        reader.start()
    for writer in thW:
        writer.start()


if __name__ == "__main__":
    main()










