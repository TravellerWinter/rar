
import random

hedges = ("Please tell me more.", "Many of my patients tell me the same thing.", "Please continue.")

qualifiers = ("Why do you say that ", "You seem to think that ", "Can you explain why ")

replacements = {"i": "you", "me": "you", "my":"your", "we":"you", "us":"you","mine":"yours"}


def reply(sentence):
    probability = random.randint(1,4)
    if probability == 1:
        return random.choice(hedges)
    else:
        return random.choice(qualifiers) + changePerson(sentence)

def changePerson(sentence):
    dow = sentence.lower()
    reply = []
    for word in dow.split():
        reply.append(replacements.get(word, word))

    return " ".join(reply)


def main():
    print("Good morning, I hope you are well today")
    print("What can I do for you?")
    while True:
        sentence = input("\n>>")
        if sentence == "Quit" or sentence == "quit":
            print("Have a nice day")
            break
        else:
            print(reply(sentence))

if __name__ == "__main__":
    main()
