from turtle import Turtle
import random

t = Turtle()

def casual(t, n, length = 20):
    t.down()
    for i in range(n):
        if i % 2 == 0:
            t.left(random.randint(0,360))
        else:
            t.right(random.randint(0,360))
        t.forward(length)
