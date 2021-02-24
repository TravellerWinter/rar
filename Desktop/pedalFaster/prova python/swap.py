
def swap(lyst, i, j):
    
    temp1 = lyst[i]
    temp2 = lyst[j]
    lyst.pop(i)
    lyst.pop(j)
    lyst.insert(i, temp2)
    lyst.insert(j, temp1)


        
