import time
problemSize = 10

print("%12s%16s" % ("Problem size", "Seconds"))

for i in range(5):
    start = time.time()
    work = 1
    for k in range(problemSize):
        for j in range(problemSize):
            for z in range(problemSize):
                
            
                work += 1
                work -= 1
    end = time.time() - start

    print("%12d%16.3f" % (problemSize, end ))
    problemSize *= 2


