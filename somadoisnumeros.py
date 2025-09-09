import args

num1= int(input('Digite um numero a ser somado: '))
num2= int(input('Digite outro numero para ser somado: '))

total=(num1+num2)
sub=(num1-num2)
multi=(num1*num2)
divi=(num1/num2)
print('A soma entre {} e {} é igual {} '.format( num1, num2, total))
print(f'A soma entre {num1} e {num2} é igual {total} ')
print(f'A subtração entre {num1} e {num2} é igual {sub} ')
print(f'A multibllicacao entre {num1} e {num2} é igual {multi} ')
print(f'A divisão entre {num1} e {num2} é igual {divi} ')