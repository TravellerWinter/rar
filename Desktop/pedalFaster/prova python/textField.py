
from breezypythongui import EasyFrame
import math


class Labeldemo(EasyFrame):



    def __init__(self):
        EasyFrame.__init__(self)

        self.addLabel("Input", row = "0", column = "0")
        self.input = self.addTextField(text = "", row = "0", column = "1")
        self.input.bind("<Return>", lambda event: self.convert())
        self.addLabel("Output", 1, 0)
        self.output = self.addTextField("", 1, 1, state = "readonly")

        self.addButton("Convert", 2, 1, columnspan = 3, command = self.convert)

    def convert(self):
        try:

           text = self.input.getText()
           Utext = int(text)
           self.output.setText(str(math.sqrt(Utext)))
        except ValueError:
            self.messageBox(title = "ERROR", message = "Input must be a positive number")






def main():
    Labeldemo().mainloop()

if __name__ == "__main__":
    main()
