taxRate = 0.20
stdDeduction = 10000.0
dpdDeduction = 3000.0

grossIncome = float(input("enter the gross income: "))
numDpd = int(input("enter the number of dependents: "))

taxableIncome = grossIncome - stdDeduction - dpdDeduction * numDpd
incomeTax = taxableIncome * taxRate

print("the income tax is: ", incomeTax)

input("enter")
