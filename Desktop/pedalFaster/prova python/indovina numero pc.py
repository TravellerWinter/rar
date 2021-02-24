                                 
from breezypythongui import EasyFrame
import random

class Labeldemo(EasyFrame):

    def __init__(self):
        EasyFrame.__init__(self)

        self.addLabel("Insert a number", 0, 0)
        self.input = self.addTextField("", 0, 1)
        self.area = self.addLabel("", 1, 0, columnspan = 2)

        self.TL = self.addButton("Too large", 2, 0, command = self.TooLarge, state = "disabled")
        self.TS = self.addButton("Too small", 2, 1, command = self.TooSmall, state = "disabled")
        self.submit = self.addButton("restart", 2, 2, command = self.submit)

        self.number = random.randint(1, 100)
        self.c = 0
        
        self.numberP = 0
        self.count = []
        self.countNumber = []


    def submit(self):
        

        if self.c == 0:
            

            numberToGuess = int(self.input.getText())
            self.area["text"] = str(self.number)
            self.TL["state"] = "normal"
            self.TS["state"] = "normal"
            self.c = 1
        elif self.c == 1:
            self.TL["state"] = "disabled"
            self.TS["state"] = "disabled"
            self.area["text"] = ""
            self.number = random.randint(1, 100)
            self.numberP = 0
            self.c = 0
            self.a = 0
            self.count = []
            self.countNumber = []
            

        


    def TooSmall(self):

        if self.numberP == 0:
            self.numberP = self.number
            self.number = (100 - self.number) // 2
            self.area["text"] = self.number
            self.count.append("TS")
            self.countNumber.append(self.numberP)
            self.countNumber.append(self.number)
        elif self.count[-1] == "TS":
            self.number = (100 - self.number) // 2
            self.area["text"] = self.number
            self.count.append("TS")
            self.countNumber.append(self.number)
        elif self.count[-1] == "TL":
            
            self.number = ((self.countNumber[-2] - self.number) // 2) + self.number
            self.area["text"] = self.number
            self.count.append("TS")
            self.countNumber.append(self.number)




        
        
            
            

    def TooLarge(self):

        if self.numberP == 0:
            self.numberP = self.number
            self.number = self.number // 2
            self.area["text"] = self.number
            self.count.append("TL")
            self.countNumber.append(self.numberP)
            self.countNumber.append(self.number)
        elif self.count[-1] == "TL":
            self.number = self.number // 2
            self.area["text"] = self.number
            self.count.append("TL")
            self.countNumber.append(self.number)
        elif self.count[-1] == "TS":
            
            self.number = ((self.number - self.countNumber[-2]) // 2) + self.countNumber[-2]
            self.area["text"] = self.number
            self.count.append("TL")
            self.countNumber.append(self.number)


        











def main():
    Labeldemo().mainloop()

if __name__ == "__main__":
    main()
