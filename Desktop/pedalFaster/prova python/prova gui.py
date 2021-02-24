
from breezypythongui import EasyFrame


class Labeldemo(EasyFrame):

    def __init__(self):
        EasyFrame.__init__(self)

        self.addLabel("0,0", 0, 0)
        self.addLabel("0,1", 0, 1)
        self.addLabel("1,0", 1, 0)
        self.addLabel("1,1", 1, 1)
        Labeldemo.addLabel("1,1", 0, 2, 1, sticky = "NSEW")



def main():
    Labeldemo().mainloop()

if __name__ == "__main__":
    main()
