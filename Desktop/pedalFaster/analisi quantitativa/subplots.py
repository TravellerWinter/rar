import numpy as np
import matplotlib.pyplot as plt

a = [1,2,3,4,5]

b = [[1,2,3,4,5], [1,2,3,4,5], [1,2,3,4,5]]


n = np.array(b)

x = np.linspace(0, 2 * np.pi, 50)
y = 2**x


fig, axes = plt.subplots(1,2)

for i in axes:
    i.plot(x,y, "blue")
axes[-1].plot(x,y,y,x)
plt.show()
