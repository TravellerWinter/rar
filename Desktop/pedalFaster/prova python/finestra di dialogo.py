
from breezypythongui import EasyFrame
import os
import tkinter.filedialog


class Labeldemo(EasyFrame):

    def __init__(self):
        EasyFrame.__init__(self)

        self.areaText = self.addTextArea("", 0, 0, width = 80, height = 15, wrap = "word")
        self.addButton("open", 1, 0, command = self.openFile)

    def openFile(self):
        fileName = tkinter.filedialog.askopenfilename(parent = self)

        if fileName != "":
            file = open(fileName, "r")
            
            self.areaText.setText(file.read())
            self.setTitle(fileName)







def main():
    Labeldemo().mainloop()

if __name__ == "__main__":
    main()
