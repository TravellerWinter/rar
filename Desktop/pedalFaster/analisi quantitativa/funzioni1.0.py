import numpy as np
import pandas as pd
import matplotlib.pyplot as plt

def import_file(file):
    data = pd.read_csv(file, parse_dates=["Date"])
    data.set_index("Date", inplace=True)
    data.drop(["Time", "OI"], axis=1, inplace=True)
    return data

data = import_file("docs/SPY_Daily.txt")


def sma(array,period):

    return array.rolling(period).mean()


def bollinger(array, period, k):

    return sma(array, period) + k * array.rolling(period).std()


def expandingMax(array):

    return array.expanding().max()

def donchianChannelUp(array, period):

    return array.rolling(period).max()

def donchianChannelDown(array, period):

    return array.rolling(period).min()

def crossOver(array1, array2):

    return (array1 > array2) & (array1.shift(1) < array2.shift(1))

def crossUnder(array1, array2):

    return (array1 < array2) & (array1.shift(1) > array2.shift(1))

def main():
    data["SMA20"] = sma(data.Close, 20)
    data["SMA200"] = sma(data.Close, 200)
    data["DeltaPerc"] = data.Close.pct_change()
    data["BuyHold"] = (data["DeltaPerc"] + 1).cumprod() * 100
    data.dropna(inplace = True)
    data.tail()

def returnRow(data, id):
    a = []
    for i in data.columns:
        a.append(data[i][id])

    return a