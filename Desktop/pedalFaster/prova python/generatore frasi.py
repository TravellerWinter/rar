
import random

articles = ("A", "THE")
nouns = ("BOY", "GIRL", "BAT", "BALL")
verbs = ("HIT", "SAW","LIKED")
prepositions = ("WITH", "BY")

def sentence():
    """ Make the sentence """
    return nounPhrase() + " " + verbPhrase() + "."

def nounPhrase():
    return random.choice(articles) + " " + random.choice(nouns)

def verbPhrase():
    return random.choice(verbs) + " " + nounPhrase() + " " + prepositionalPhrase()

def prepositionalPhrase():
    return random.choice(prepositions) + " " + nounPhrase()

def main():
    count = int(input("Enter the number of sentences to write: "))

    for i in range(count):
        print(sentence())


if __name__ == "__main__":
    main()

input("enter a key to close: ")
