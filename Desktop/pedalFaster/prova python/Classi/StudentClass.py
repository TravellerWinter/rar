class Student(object):
    
    def __init__(self, name, number):

        self.name = name
        self.scores = []
        for i in range(number):
            self.scores.append(0)


    def getName(self):
        return self.name


    def setScore(self, i, score):
        self.scores[i - 1] = score

    def getScore(self, i):
        return self.scores[i-1]

    def getAverage(self):
        sum = 0
        for i in self.scores:
            sum += i

        return sum / len(self.scores)

    def getHighScore(self):

        return max(self.scores)


    def __str__(self):
        return "name: " + self.name + "\nScores: " + " ".join(map(str, self.scores))


    




