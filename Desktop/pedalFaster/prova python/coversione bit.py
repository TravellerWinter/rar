
switch = int(input("Enter 1 to convert binary to integer, 2 to convert integer in binary: "))




if switch == 1:
    bitString = input("enter a string of bit: ")
    decimal = 0
    exponent = len(bitString) - 1
    for i in bitString:
        decimal = decimal + int(i) * 2 ** exponent
        exponent -= 1
    print("The integer value is:" , decimal)

else:
    decimal = int(input("Enter a decimal integer: "))
    bitString = ""
    if decimal == 0:
        print(0)
    else:

        print("Quotient Remainder Binary")
        while decimal > 0:
            remainder = decimal % 2
            decimal = decimal // 2
            bitString = str(remainder) + bitString
            print("%5d%8d%12s" % (decimal, remainder, bitString))
        print("The binary rapresentation is:", bitString)
    



