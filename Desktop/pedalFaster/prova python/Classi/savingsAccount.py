import pickle

class SavingsAccount(object):
    RATE = 0.02
    def __init__(self, name, pin, balance = 0.0, fileName = None):
        if fileName == None:
            self.name = name
            self.pin = pin
            self.balance = balance
            
        else:
            fileObj = open(fileName, "rb")
            obj = pickle.load(fileObj)
            self.name = obj.name
            self.pin = obj.pin
            self.balance = obj.balance
            fileObj.close()

        

    def __str__(self):
        result = "Name: " + self.name + "\n"
        result += "PIN: " + str(self.pin) + "\n"
        result += "Balance: " + str(self.balance) + "\n"
        return result

    def getBalance(self):
        return self.balance
    def getName(self):
        return self.name
    def getPin(self):
        return self.pin

    def deposit(self, amount):
        if amount < 0:
            return "amount must be > 0"
        else:
            self.balance += amount

    def withdraw(self, amount):
        if amount < 0:
            return "amount must be > 0"
        elif amount > self.balance:
            return "amount must be < of the balance"
        else:
            self.balance -= amount

    def compoundInterest(self):
        interest = self.balance * SavingsAccount.RATE
        self.deposit(interest)
        return interest

    def save(self, fileName):

        fileObj = open(fileName, "wb")
        pickle.dump(self, fileObj)
        fileObj.close()
        
        









