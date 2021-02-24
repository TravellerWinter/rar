from socket import *
from codecs import decode


def main():
    HOST = "localhost"
    PORT = 5000
    ADDRESS = (HOST, PORT)
    CODE = "ascii"

    server = socket()
    server.connect(ADDRESS)

    message = decode(server.recv(1024), "ascii")
    print(message)

    while True:

        message = input("> ")

        if message == "":
            
            break
        server.send(bytes(message, "ascii"))

        reply = decode(server.recv(1024), "ascii")
        if reply == "":
            print("Server disconneted")
            break
        else:
            print(reply)
    server.close()

if __name__ == "__main__":
    main()
