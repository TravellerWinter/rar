
from breezypythongui import EasyFrame


class Labeldemo(EasyFrame):
   

    def __init__(self):
        EasyFrame.__init__(self)

        self.label = self.addLabel("Hello world", 0, 0, 2, sticky = "NSEW")
        self.restore = self.addButton("Restore", 1, 1, state = "disabled", command = self.restored)
        self.clear = self.addButton("Clear", 1, 0, command = self.cleard)

    def cleard(self):
            self.label["text"] = ""
            self.clear["state"] = "disabled"
            self.restore["state"] = "normal"

    def restored(self):
            self.label["text"] = "Hello world"
            self.clear["state"] = "normal"
            self.restore["state"] = "disabled"




def main():
    Labeldemo().mainloop()

if __name__ == "__main__":
    main()
