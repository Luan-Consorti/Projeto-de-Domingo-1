import random
from random import sample
acerto = 0
############################
lista1 = sample(range(0, 61), 6)
############################
lista = []
for i in range(6):
    números_jogados = int(input("números: "))
    lista.append(números_jogados)
    
##############################
    
    
for j in range(len(lista1)):
    for k in range(len(lista)):
        if lista1[j] == lista[k]:
            acerto += 1 
        else:
            continue
            
    

print(lista1)
print(lista)
print(acerto)