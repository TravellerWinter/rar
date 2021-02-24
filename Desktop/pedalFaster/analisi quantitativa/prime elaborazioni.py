import numpy as np
import pandas as pd
import matplotlib.pyplot as plt



def import_file(file):
    data = pd.read_csv(file, parse_dates=["Date"])
    data.set_index("Date", inplace=True)
    data.drop(["Time", "OI"], axis=1, inplace=True)
    return data

data = import_file("docs/SPY_Daily.txt")
def start(data):
    plt.figure(figsize=(8,4), dpi=100)
    plt.xlabel("Tempo")
    plt.ylabel("Chiusure")
    plt.title("Chiusure SPY Daily")
    plt.grid()
    #plt.plot(data.index, data["Close"], color="green") // scrittura estesa della riga sotto
    #data["Close"].plot(color="green");
    plt.hist(data["Close"], 100, color="green");

def hist_plot(data):

    fig, axes = plt.subplots(1,2, figsize=(8,4), dpi=100)
    axes[0].hist(data["Close"], 100, color="green", orientation="horizontal")
    axes[1].plot(data["Close"], color="green")
    #plt.show() non è necessario

def SMA200(data):
    data["SMA200"] = data["Close"].rolling(200).mean()
    data["SMA200"].plot()
    #plt.plot(data["SMA200"])
    plt.show()

def SMA200SUBPLOTS(data):
    data["SMA200"] = data["Close"].rolling(200).mean()
    fig, axes = plt.subplots(1,1, figsize=(8,4), dpi=100)
    axes.plot(data.index, data["Close"],data.index, data["SMA200"] ,color="red")
    
    plt.show()

def bollinger(data):
    data["SMA200"] = data["Close"].rolling(200).mean()
    data["BBU200"] = data["SMA200"] + 2 * data.Close.rolling(200).std()
    data["BBL200"] = data["SMA200"] - 2 * data.Close.rolling(200).std()
    #fig, axes = plt.subplots(1,1, figsize=(8,4), dpi=100)
    #axes.plot(data.index, data["Close"],data.index, data["SMA200"], data.index, data["BBU200"], data.index, data["BBL200"], color="red")
    plt.figure(figsize=(8,4), dpi=100)
    plt.plot(data["Close"], color="black", alpha=0.4)
    plt.plot(data["SMA200"], color="green")
    plt.plot(data["BBU200"], color="red")
    plt.plot(data["BBL200"], color="red")