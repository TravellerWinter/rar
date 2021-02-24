from socket import *
from time import ctime
from codecs import decode

HOST = "localhost"
PORT = 5000
ADDRESS = (HOST, PORT)
CODE = "ascii"

server = socket()
server.bind(ADDRESS)
server.listen(5)

while True:
    print("Waiting for connection . . .")
    client, address = server.accept()
    print("Connected from", address)

    client.send(bytes("Welcome to my chatroom!", CODE))

    while True:

        message = decode(client.recv(1024), CODE)

        if message == "":
            print("Client disconneted")
            client.close()
            break
        else:
            print(message)
            client.send(bytes(input("> "), "ascii"))