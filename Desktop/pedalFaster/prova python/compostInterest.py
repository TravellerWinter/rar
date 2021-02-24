startBalance = float(input("enter the investiment amount: "))
years = int(input("enter the number of years: "))
rate = int(input("enter the rate in %: "))
endBlance = startBalance
rate = rate/ 100
interest = 0.0
totalInterest = 0.0

if startBalance > 0:
    for years in range(1, years + 1):
        print("%4s%18s%10s%16s" % ("year", "Starting Balance", "Interest", "Ending Balance"))
        interest = startBalance * rate
        endBalance = startBalance + interest
        print("%4d%18.2f%10.2f%16.2f" % (years, startBalance, interest, endBalance))
        startBalance = endBalance
        totalInterest = totalInterest + interest
    print("Ending Balance: $%0.2f" % endBalance)
    print("Total interest earned: $%0.2f" % totalInterest)
else:
    print("of fuck, how can you have a start balance negative?")




input("enter a key to close")
