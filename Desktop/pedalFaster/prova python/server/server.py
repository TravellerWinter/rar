from socket import *
from time import ctime

HOST = '192.168.1.6'
PORT = 5000
BUFSIZE = 1024
ADDRESS = (HOST, PORT)

s = socket(AF_INET, SOCK_STREAM)
s.bind(ADDRESS)

s.listen(10)

while True:
    print("waiting for connection...")
    client, address = s.accept()
    print("connected from: " , address)
    client.send(bytes(ctime() + "\nHave a nice day", "ascii"))
    client.close()