from socket import *
from codecs import decode
def main():
    HOST = "localhost"
    PORT = 5000
    BUFSIZE = 1024
    ADDRESS = (HOST, PORT)

    server = socket(AF_INET, SOCK_STREAM)

    server.connect(ADDRESS)

    dayAndTime = decode(server.recv(BUFSIZE), "ascii")
    print(dayAndTime)
    server.close()


if __name__ == "__main__":
    main()


