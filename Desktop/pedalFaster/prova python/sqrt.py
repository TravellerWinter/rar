import math

x = float(input("Insert a positive number"))

tolerance = 0.000001
estimate = 1.0

while True:
    estimate = (estimate + x/estimate) / 2
    difference = abs(x - estimate**2)
    if difference <= tolerance:
        break


print("the program's estimate is:", estimate)
print("the python's estimate is: ", math.sqrt(x))
