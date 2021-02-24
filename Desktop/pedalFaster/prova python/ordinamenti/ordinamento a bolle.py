import random

a = [3, 33, 1002, 2, 1]

def swap(lyst, i, j):
    temp = lyst[i]
    lyst[i] = lyst[j]
    lyst[j] = temp



def bubble(lyst):

    i = 0
    while i < len(lyst):
        n = 1
        while n < len(lyst) - i:
            if lyst[n] < lyst[n-1]:
                swap(lyst, n, n-1)
            n += 1
        i += 1


def main():
    for i in range(1):
        a = []
        for el in range(40000):
            n = random.randint(1, 1000)
            a.append(n)
        print(a)
        bubble(a)
        print(a)


