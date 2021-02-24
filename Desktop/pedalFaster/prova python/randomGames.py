import random 

larger = int(input("enter the larger number: "))
smaller = int(input("enter the smaller number: "))
number = random.randint(smaller,larger)
count = 0

while True:
    userNumber = int(input("enter your guess: "))
    count += 1
    if userNumber < number:
        print("too small")
    elif userNumber > number:
        print("too large")
    else:
        print("congratulations, you have guessed the number after", count,
              "tries")
        break

    
