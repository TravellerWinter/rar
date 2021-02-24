from bank import Bank
from breezypythongui import EasyFrame
import os


class ATM(EasyFrame):
    
    def __init__(self, title = "ATM"):
        self.b = Bank("cache/bankCache.txt")
        self.accounts = self.b.accounts
        self.account = ""
        EasyFrame.__init__(self, title)

        self.addLabel(text = "Name", row= 0, column= 0)
        self.addLabel("PIN", 1, 0)
        self.addLabel("Amount", 2, 0)
        self.addLabel("Status", 3, 0)

        self.nameText = self.addTextField("", 0, 1)
        self.pinText = self.addTextField("", 1, 1)
        self.amountText = self.addTextField("", 2, 1)
        self.statusText = self.addTextField("Welcome to the bank!", 3, 1, state = "readonly")

        self.balance = self.addButton("Balance", 0, 3, command = self.getBalance)
        self.deposit = self.addButton("Deposit", 1, 3, command = self.deposit)
        self.withdraw = self.addButton("Withdraw", 2, 3, command = self.withdraw)
        self.logoutB = self.addButton("Login", 3, 3, command = self.login)



    def login(self):
        name = self.nameText.getText()
        pin = self.pinText.getText()
        key = self.b.makeKey(name, pin)
        self.account = self.accounts.get(key, None)
        if self.accounts.get(key, None) != None:
            self.statusText.setText("Hello " + name + "!")
            self.amountText.setText("0.0")
            self.logoutB["text"] = "Logout"
            self.logoutB["command"] = self.logout
        else:
            self.statusText.setText("Error")


    def logout(self):
        
        self.statusText.setText("Welcome to the bank!")
        self.logoutB["text"] = "Login"
        self.logoutB["command"] = self.login
        self.b.save("cache/bankCache.txt")
        


    def getBalance(self):
        balance = self.account.getBalance()
        self.statusText.setText(str(balance))

    def deposit(self):
        amount = float(self.amountText.getText())
        if amount < 0:
            self.statusText.setText("< 0")
        else:
            self.account.deposit(amount)

    def withdraw(self):
        amount = int(self.amountText.getText())
        if amount < 0:
            self.statusText.setText("< 0")
        elif amount > account.getBalance():
            self.statusText.setText("Insufficent funds")
        else:
            self.account.withdraw(amount)

        



def main():
    atm = ATM()
    atm.mainloop()

if __name__ == "__main__":
    main()


