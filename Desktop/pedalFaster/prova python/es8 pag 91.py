x = float(input("enter a number: "))
y = float(input("enter a number: "))
op = input("Choose a operator: ")

if(op == "+"):
    print(x + y)
elif(op == "x" or op == "*"):
    print(x * y)
elif(op == "-"):
    print(x - y)
elif(op == "/"):
    print(x / y)
else:
    print("it isn't an operator")
