import numpy as np
import matplotlib.pyplot as plt

dado1 = np.random.randint(1,7,1000)
dado2 = np.random.randint(1,7,1000)
somma = dado1 + dado2

x = somma

plt.hist(somma, 11, color="blue")
plt.show()