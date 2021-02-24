
from breezypythongui import EasyFrame


class Labeldemo(EasyFrame):

    def __init__(self):
        EasyFrame.__init__(self)

        self.label = self.addLabel("0", 0, 0, columnspan = 2, sticky = "NSEW")
        self.count = 0
        self.next = self.addButton("Next", 1, 0, command = self.next)
        self.reset = self.addButton("reset", 1, 1, command = self.reset)

    def next(self):
        self.count += 1
        self.label["text"] = (str(self.count))

    def reset(self):
        self.count = 0
        self.label["text"] = (str(self.count))








def main():
    Labeldemo().mainloop()

if __name__ == "__main__":
    main()
