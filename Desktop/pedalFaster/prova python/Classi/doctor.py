import random

class Doctor(object):

    hedges = ("Please tell me more.", "Many of my patients tell me the same thing.", "Please continue.")
    qualifiers = ("Why do you say that ", "You seem to think that ", "Can you explain why ")
    replacements = {"i": "you", "me": "you", "my":"your", "we":"you", "us":"you","mine":"yours"}

    def __init__(self):
        print("Good morning, I hope you are well today")
        print("What can I do for you?")
        while True:

            self.sentence = input("\n>>")

            if self.sentence == "Quit" or self.sentence == "quit":
                print("Have a nice day")
                break
            else:
                print( self.answer(self.sentence))

    def answer(self, sentence):
        prob = random.randint(1,4)
        if prob == 1:
            return random.choice(Doctor.hedges)
        else:
            return random.choice(Doctor.qualifiers) + self.changePerson(sentence)

    def changePerson(self, sentence):

        dow = sentence.lower()
        reply = []
        for word in dow.split():
            reply.append(Doctor.replacements.get(word, word))
        return " ".join(reply)


    def __str__(self):
        return self.reply




    




