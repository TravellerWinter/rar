from socket import *
from time import ctime

HOST = "localhost"
PORT = 5000
ADDRESS = (HOST, PORT)

server = socket(AF_INET, SOCK_STREAM)
server.bind(ADDRESS)
server.listen(5)

while True:
    print("Waiting for coonnection . . .")
    client, address = server.accept()
    print(". . . Connected from", address)

    client.send(bytes(ctime() + "\nHave a nice day", "ascii"))
    client.close()
