from StudentClass import Student

class El(Student):
    
    def __init__(self, name, number):
        Student.__init__(self, name, number)

    def spop(self, i):
        self.scores.pop(i - 1)





