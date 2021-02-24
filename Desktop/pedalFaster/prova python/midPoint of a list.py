
import os,random

os.chdir("text")

f = open("myText.txt", "w")
numbers = []

for i in range(50):
    number = random.randint(1,500)
    f.write(str(number) + " ")
f.close()


f = open("myText.txt", "r")

for line in f:
    words = line.split()
    for word in words:
        numbers.append(int(word))

#calcolo mediana
numbers.sort()
median = len(numbers) // 2
if len(numbers) % 2 == 1:
    print("the median is:", numbers[len(numbers) // 2])
else:
    print("the median is:", (numbers[median] + numbers[median - 1]) / 2 )

input("enter a key to close: ")


