import numpy as np
import pandas as pd
import matplotlib.pyplot as plt


df = pd.DataFrame([np.random.randint(1,100,5) for x in range(5)] , columns=["a", "b", "c", "d", "e"])

x = np.linspace(0, 10)
y = np.exp(x)

fig, axis = plt.subplots(1,1,)

axis.plot(y,x,x,y, color="blue")
plt.show()