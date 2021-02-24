from math import *
import random
from turtle import Turtle, tracer, update

inc = input("Insert the unknow value: ")
funct = input("Insert the function: ")

t = Turtle()

for i in range(100):
    value = random.uniform(i - 50, (i - 50) + 1 )
    try:
        replacement = funct.replace(inc , "(" + str(value) + ")")
       
        res = eval(replacement)
        print(res)
        
        t.down()
        t.goto(value, res)
        
    except Exception:
        pass


