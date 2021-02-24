import random
giocatori = []
etaG = []
dGiocatori = {}
caselle = 63

giocatoriInGioco = {}
def main():
    
  
    for i in range(6):
        nome = input("Inserisci il nome del giocatore numero " + str(i + 1) + " altrimenti digita \"fine\":")
        if nome == "fine":
            break
        età = str(input("Inserisci l'età del giocatore numero " + str(i + 1) + ":"))
        nomeEta = nome + " " + età
        giocatori.append(nome)
        etaG.append(int(età))
        dGiocatori[nome] = età

    if len(giocatori) < 2 and len(giocatori) > 0:

        print("Si può giocare con un minimo di due giocatori, coglione")
        main()
    elif len(giocatori) == 0:
        main()
    else:
        primo = sceltaGiocatore()
        for g in dGiocatori:
            giocatoriInGioco[g] = 1
        
        giocatori.remove(primo)
        giocatori.insert(0, primo)
        gioco()
        

    
def gioco():
    fermi = {}
    while find(giocatoriInGioco, 63) == False:
        

        

        for i in range(len(giocatori)):
            nome = giocatori[i]
            if fermi.get(nome):
                if fermi[nome] == 0:
                    fermi.pop(nome)
                else:
                    fermi[nome] -= 1
            else:


                 input(nome + " premi un pulsante per lanciare i dadi: ")
                 lancio = random.randint(1,6) + random.randint(1,6)
                 print("avanzi di " + str(lancio) + " caselle")
                 giocatoriInGioco[nome] = giocatoriInGioco[nome] + lancio  # si potrebbe anche fare: giocatoriInGioco[nome] += lancio
            
                 if giocatoriInGioco[nome] == 63:
                    print("sei alla cassella numero " + str(giocatoriInGioco[nome]) + "\n")
                    print(nome + " hai vinto, congratulazioni, ora puoi toranre a vivere la tua vita di merda")
                    break
                 elif giocatoriInGioco[nome] > 63:
                    giocatoriInGioco[nome] = 63 - (giocatoriInGioco[nome] - 63) 
                    print("sei alla cassella numero " + str(giocatoriInGioco[nome]) + "\n")
                 else:
                    print("sei alla cassella numero " + str(giocatoriInGioco[nome]) + "\n")
    
                 if giocatoriInGioco[nome] % 9 == 0:
                    print("Sei su una casella oca, qua qua")
                    input("Per tirare i dadi premi un pulsante \n")
                    lancio = random.randint(1,6) + random.randint(1,6)
                    print("avanzi di " + str(lancio) + " caselle")
                    giocatoriInGioco[nome] = giocatoriInGioco[nome] + lancio
   
                    if giocatoriInGioco[nome] == 63:
                        print("sei alla cassella numero " + str(giocatoriInGioco[nome]) + "\n")
                        print(nome + " hai vinto, congratulazioni, ora puoi toranre a vivere la tua vita di merda")
                        break
                    elif giocatoriInGioco[nome] > 63:
                        giocatoriInGioco[nome] = 63 - (giocatoriInGioco[nome] - 63) 
                        print("sei alla cassella numero " + str(giocatoriInGioco[nome]) + "\n")
                    else:
                        print("sei alla cassella numero " + str(giocatoriInGioco[nome]) + "\n")

                 if giocatoriInGioco[nome] == 19:
                     print("Sei alla locanda, ti spacchi e rimani lì per tre turni")
                     fermi[nome] = 3
                 if giocatoriInGioco[nome] == 31 or giocatoriInGioco[nome] == 52:
                     n = 0
                     try:
                         a = giocatoriInGioco.values.index(31)
                         name = ""
                         for i in giocatoriInGioco:
                             if giocatoriInGioco[i] == 31:
                                 name = i
                         fermi.pop(name)
                         print(name + " non sei più in prigione, al tuo posto ci sarà " + nome)
                         fermi[nome] = 10000
                     except:
                         n = 1
                         print("\nSei in prigione, rimarrai lì finchè qualche altro giocatore non verrà sulla stessa casella")
                         fermi[nome] = 10000
                     try:
                         a = giocatoriInGioco.values.index(52)
                         name = ""
                         for i in giocatoriInGioco:
                             if giocatoriInGioco[i] == 52:
                                 name = i
                         fermi.pop(name)
                         print(name + " non sei più in prigione, al tuo posto ci sarà " + nome)
                         fermi[nome] = 10000
                     except:
                         if n == 0:
                             print("\nSei in prigione, rimarrai lì finchè qualche altro giocatore non verrà sulla stessa casella")
                             fermi[nome] = 10000
                         else:
                             print("")
                 if giocatoriInGioco[nome] == 42:
                     print("Sei nel labirinto, torni alla casella 33")
                     giocatoriInGioco[nome] = 33
                 if giocatoriInGioco[nome] == 42:
                     print("Sei così sfigato che hai beccato lo scheletro. Torna alla casella 1")
                     giocatoriInGioco[nome] = 1
                 if giocatoriInGioco[nome] == 6:
                     print("Pagi la posta e ritiri i dadi")
                     input("Per tirare i dadi digita \"sì\" \n")
                     lancio = random.randint(1,6) + random.randint(1,6)
                     print("avanzi di " + str(lancio) + " caselle")
                     giocatoriInGioco[nome] = giocatoriInGioco[nome] + lancio
                     print("\nsei alla cassella numero " + str(giocatoriInGioco[nome]))


                        



                

            
           





    

def sceltaGiocatore():

    
            minimo = etaG[0]
            for i in range(len(etaG)):
                if etaG[i] < minimo:
                    minimo = etaG[i]
                    
            primo = ""
            for item in dGiocatori:
                if dGiocatori[item] == str(minimo):
                    primo = item
                    print("Il primo a giocare è " + primo)
                    break
                    
            return primo        



def find(dic, val):
    result = ""
    for i in dic:
        if dic[i] == val:
            result = i
            return result
            break

        else:
            return False








if __name__ == "__main__":
    main()









            

