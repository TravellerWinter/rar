
from breezypythongui import EasyFrame
import random


class Labeldemo(EasyFrame):

    def __init__(self):
        EasyFrame.__init__(self)

        self.label = self.addLabel("Guess a number beetween 1 and 100", 0, 0, columnspan = 2, sticky = "NSEW")
        self.count = 0
        self.text = self.addTextField("", 1, 0, columnspan = 2, sticky = "NSEW")
        self.next = self.addButton("Next", 2, 0, command = self.next)
        self.reset = self.addButton("reset", 2, 1, command = self.reset)
        self.num = random.randint(1, 100)

    def next(self):
        self.count += 1
        while True:
            
            numInput = int(self.text.getText())
            if numInput == self.num:
                self.label["text"] = "You guessed the number in " + str(self.count) + " attempts"
                break
            elif numInput > self.num:
                self.label["text"] = "You number is too large"
                break
            elif numInput < self.num:
                self.label["text"] = "You number is too low"
                break

    def reset(self):
        self.count = 0
        self.num = random.randint(1, 100)
        self.label["text"] = "Guess a number beetween 1 and 100"
        self.text.setText("")



def main():
    Labeldemo().mainloop()

if __name__ == "__main__":
    main()
