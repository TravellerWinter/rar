import time, random
from threading import Thread

class MyT(Thread):

    def __init__(self, n, maxTime):
        Thread.__init__(self, name = "Thread " + str(n))
        self.sleepInterval = random.randint(1, maxTime)

    def run(self):

        print("%s starting, with sleep interval: %d seconds \n" % (self.getName(), self.sleepInterval))
        time.sleep(self.sleepInterval)
        print("%s is waking up\n" % self.getName())


def main():
    numThreads = int(input("Enter the number of threads: "))
    sleepMax = int(input("Enter the maximun time of sleep: "))

    threadList = []
    for count in range(numThreads):
        threadList.append(MyT(count + 1, sleepMax))
    for thread in threadList:
        thread.start()

if __name__ == "__main__":
    main()
