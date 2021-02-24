import random

money = int(input("enter the amount of money: "))
count = 0
greatest = 0

while True:
    count += 1
    dade1 = random.randint(1,7)
    dade2 = random.randint(1,7)
    if (dade1 + dade2) == 7:
        money += 4

    else:
        money -= 1

    if money > greatest:
        greatest = money
    

    if money <= 0:
        print("You have lose in", count, "moves")
        print("You have reached", greatest, "money")
        break
        
        

    
        

    
