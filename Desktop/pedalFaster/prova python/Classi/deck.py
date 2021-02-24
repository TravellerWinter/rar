from card import Card
import random

class Deck(object):
    
    def __init__(self):
        self.cards = []
        for suit in Card.SUITS:
            for rank in Card.RANKS:
                c = Card(rank, suit)
                self.cards.append(c)

    def shuffle(self):
        random.shuffle(self.cards)

        
    def deal(self):
        if len(self.cards) == 0:

            return None
        else:
            self.cards.pop(0)

    def __str__(self):
        result = ""
        for c in self.cards:
            print(c)
        return ""

        


















        








