



class Rational(object):
    

    def __init__(self, numer, denom):

        self.numer = numer
        self.denom = denom
        self._reduce()

    def numerator(self):
        return self.numer
    def denominator(self):
        return self.denom

    def __str__(self):

        return str(int(self.numer)) + "/" + str(int(self.denom))

    def _reduce(self):
        divisor = self._GCD(self.numer, self.denom)

        self.numer = self.numer / divisor
        self.denom = self.denom / divisor

    def _GCD(self, a, b):
        
        (a, b) = (max(a, b), min(a, b))

        while b > 0:
            (a, b) = (b, a % b)
        return a 

    def __add__(self, other):

        newNumer = self.numer * other.denom + other.numer * self.denom
        newDenom = self.denom * other.denom

        return Rational(newNumer, newDenom)

    def __sub__(self, other):
        newNumer = self.numer * other.denom - other.numer * self.denom
        newDenom = self.denom * other.denom
        return Rational(newNumer, newDenom)

    def __mul__(self, other):
        newNumer = self.numer * other.numer 
        newDenom = self.denom * other.denom
        return Rational(newNumer, newDenom)

    def __truediv__(self, other):
        newNumer = self.numer * other.denom 
        newDenom = self.denom * other.numer
        return Rational(newNumer, newDenom)

    def __lt__(self, other):
        # Confronta due numeri razionali usando <

        extremes = self.numer * other.denom
        means = self.denom * other.numer
        return extremes < means

    def __eq__(self, other):

        if self is other:
            return True
        elif type(self) != type(other):
            return False
        else:
            return self.numer == other.numer and self.denom == other.denom

    def __ge__(self, other):

        extremes = self.numer * other.denom
        means = self.denom * other.numer
        if extremes == means:
            return True
        else:
            return extremes > means

    
    

    



  
        
        

           





