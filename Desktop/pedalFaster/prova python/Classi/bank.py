from savingsAccount import SavingsAccount
import pickle


class Bank(object):
    
    def __init__(self, fileName = None):
        self.accounts = {}
        if fileName != None:
            fileObj = open(fileName, "rb")
            while True:
                try:

                   obj = pickle.load(fileObj)
                   self.add(obj)
                except EOFError:
                    fileObj.close()
                    break

    def __str__(self):
        return "\n".join(map(str, self.accounts.values()))

    def makeKey(self, name, pin):
        return name + "/" + pin
    
    def add(self, account):
        key = self.makeKey(account.getName(), account.getPin())
        self.accounts[key] = account

    def remove(self, name, pin):
        key = self.makeKey(name, pin)
        return self.accounts.pop(key, None)

    def get(self, name, pin):
        key = self.makeKey(name, pin)
        return self.accounts.get(key, None)

    def computeInterest(self):
        total = 0
        for account in self.accounts.values():
            total += account.computingInterest()

        return total

    def save(self, fileName = None):
        if fileName != None:
            self.file = fileName
        elif fileName == None:
            return
        self.fileObj = open(self.file, "wb")
        for account in self.accounts.values():
            pickle.dump(account, self.fileObj)

        self.fileObj.close()




