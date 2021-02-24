import time, random
from threading import Thread, currentThread, Condition

class SharedCell(object):
    

    def __init__(self):
        self.data = -1
        self.writable = True
        self.condition = Condition()

    def setData(self, data):
        self.condition.acquire()
        while self.writable == False:
            self.condition.wait()
        print(currentThread().getName() + " setting data to: " + str(data))
        self.writable = False
        self.data = data
        self.condition.notify()
        self.condition.release()

    def getData(self):
        self.condition.acquire()
        while self.writable == True:
            self.condition.wait()
        print(currentThread().getName() + " accesing data " + str(self.data))
        self.writable = True
        self.condition.notify()
        self.condition.release()





class Producer(Thread):

    def __init__(self, cell, accessCount, sleepMax = 4):
        Thread.__init__(self, name = "Producer")
        self.accessCount = accessCount
        self.cell = cell
        self.sleepMax = sleepMax

    def run(self):
        print(self.getName() + " is starting up")
        for count in range(self.accessCount):
            time.sleep(random.randint(1, self.sleepMax))
            self.cell.setData(count + 1)
        print(self.getName() + " is done producing\n")

class Consumer(Thread):

    def __init__(self, cell, accessCount, sleepMax = 4):
        Thread.__init__(self, name = "Consumer")
        self.accessCount = accessCount
        self.cell = cell
        self.sleepMax = sleepMax

    def run(self):
        print(self.getName() + " is starting up")
        for count in range(self.accessCount):
            time.sleep(random.randint(1, self.sleepMax))
            value = self.cell.getData()

        print(self.getName() + " is done consuming\n")



def main():
    accessCount = int(input("Enter the number of accesses: "))
    sleepMax = 4
    cell = SharedCell()
    producer = Producer(cell, accessCount, sleepMax)
    consumer = Consumer(cell, accessCount, sleepMax)
    print("Starting the Threads")
    producer.start()
    consumer.start()

if __name__ == "__main__":
    main()