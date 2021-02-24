switch = int(input("enter 1 to crypt, 2 to decrypt and 3 to force decryption: "))
plainText = input("enter a string: ")
code = ""
count = 1


if switch == 1:
    distance = int(input("enter a distance for the encyption: "))

    for i in plainText:
        ordValue = ord(i)

        if ordValue <= 96 or ordValue >= 123 :
            code += chr(ordValue)

        else:
            chiperValue = ordValue + distance
            if chiperValue > ord("z"):
                chiperValue = ord("a") + (distance - (ord("z") - ordValue) ) - 1

            code += chr(chiperValue)

    print("the chiper text is:" , code)


elif switch == 2:
    distance = int(input("enter a distance for the encyption: "))

    for i in plainText:
        chiperValue = ord(i)

        if chiperValue <= 96 or chiperValue >= 123 :
            code += chr(chiperValue)

        else:
            ordValue = chiperValue - distance
            if ordValue < ord("a"):
                ordValue = ord("z") - ( distance - ( chiperValue - ord("a") )) + 1

            code += chr(ordValue)

    print("the decrypted text is:", code)

else:
    while count <= 26:
        code = ""
        for i in plainText:
            chiperValue = ord(i)

            if chiperValue <= 96 or chiperValue >= 123 :
                code += chr(chiperValue)

            else:
                ordValue = chiperValue - count
                if ordValue < ord("a"):
                    ordValue = ord("z") - ( count - ( chiperValue - ord("a") )) + 1

                code += chr(ordValue)
        print(code)
        print()

        count += 1

       




input("enter a key to exit: ")
