from socket import *
from codecs import decode

HOST = '192.168.1.6'
PORT = 5000
BUFSIZE = 1024
ADDRESS = (HOST, PORT)

s = socket(AF_INET, SOCK_STREAM)
s.connect(ADDRESS)
d = decode(s.recv(BUFSIZE), "ascii")

print(d)
s.close()