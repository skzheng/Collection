def pairs(arr):
  store = []
  
  if len(arr) < 2:
    print('Not enough items to form a pair')
    return arr
  
  for i in range(len(arr)):
    for j in range(i+1, len(arr)):
      store.append((arr[i], arr[j]))
      
  return store
  
print(pairs([0,1,2,3,4,5]))

def is_four_of_kind(hand):
  store = {}
  
  for card in hand:
    store[card] = store.get(card,0) + 1
    
  for item in store:
    if store[item] > 3:
      return True
  return False

# print(is_four_of_kind(["K","Q","K","K","K"]))

def merge(a,b):
  arr = []
  
  while len(a) and len(b):
    if a[0] < b[0]:
      arr.append(a.pop(0))
    else:
      arr.append(b.pop(0))
  arr += a + b
  
  return arr 
  
# print(merge([1, 3, 5], [2, 4, 6]))


def dec_to_base_x(base,num):
  
  sign = ''
  if num < 0:
    sign = '-'
    num *= -1
    
  rem = num % base 
  quot = num // base
  
  if quot < 1:
    return str(rem)
    
  return sign + dec_to_base_x(base, quot) + str(rem)
  
print(dec_to_base_x(2,-21))
