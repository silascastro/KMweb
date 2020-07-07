import math

def somar_algarismos(numero, total=0):
  if numero == 0: return total 

  unidade= numero % 10 
  novo_numero = math.floor(numero / 10) 

  return somar_algarismos(novo_numero, total + unidade) 


print(somar_algarismos(154))