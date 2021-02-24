import os

f = open("text/myText.txt", "r")

words = []

for line in f:
    for word in line.split():
        words.append(word.upper())


theDic = {}

for word in words:
    number = theDic.get(word, None)
    if number == None:
        theDic[word] = 1
    else:
        theDic[word] += 1


moda = max(theDic.values())

for key in theDic:
    if theDic[key] == moda:
        print("the moda is: ", key)
        break

