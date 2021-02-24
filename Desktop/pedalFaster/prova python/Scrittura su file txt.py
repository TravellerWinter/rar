import random

f = open("text/myText.txt", "w")

for count in range(500):
    randy = random.randint(1,500)
    f.write(str(randy) + "\n")
f.close()
