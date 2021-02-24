
from DiceClass import Die

class Player(object):

    def __init__(self):

        self.die1 = Die()
        self.die2 = Die()
        self.rolls = []

    def __str__(self):

        results = ""

        for (v1,v2) in self.rolls:

            results = results + str((v1,v2)) + " " + str(v1 + v2) + "\n"

        return results

    def getNumberOfRolls(self):
        return len(self.rolls)

    def play(self):

        self.rolls = []
        v1 = self.die1.roll()
        v2 = self.die2.roll()

        self.rolls.append((v1,v2))
        initalSum = v1 + v2
        if initalSum in (2, 3, 12):
            return False
        elif initalSum in (7, 11):
            return True
        while True:
            
            v1 = self.die1.roll()
            v2 = self.die2.roll()

            self.rolls.append((v1,v2))
            laterSum = v1 + v2
            if laterSum == 7:
                return False
            elif laterSum == initalSum:
                return True


def playOneGame():
    player = Player()
    win = player.play()
    print(player)
    
    if win:
        print("You win!")
    else:
        print("You lose")


def playMoreGames(number):
    wins = 0
    losses = 0
    winsRolls = 0
    lossRolls = 0
    player = Player()

    for count in range(number):
        hasWon = player.play()
        if hasWon :
            wins += 1
        else:
            losses += 1

    print("The number of wins is: ", wins)
    print("the number of losses is: ", losses)
    print("The winning percentage is %0.3f" % (wins / number))

def main():
    i = int(input("Enter 1 to play, 2 to play more games: "))
    if i == 1:
        playOneGame()
    elif i == 2:
        playMoreGames(int(input("How many games do you want to play? ")))



if __name__ == "__main__":
    main()






        

    




