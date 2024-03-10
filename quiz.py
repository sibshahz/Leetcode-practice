data=['str',9794,'dataof','str',9794,5,5,3,'7sibist','another string',777,'a','b']
# find the nbr of element that are string and interger and return in an array
# find the largest str
# find the small str
# find the largest nbr
# find the smallest nbr


# make a two list one contain str and second contain nbr
# itrate on two new list and find the max ,min nbr,min str,max str

new_int=[]
s_str=[]

for i in data:
    if(type(i)==int):
        new_int.append(i)
    elif(type(i)==str):
        s_str.append(i)
# --------------------------------------------------------------#
min=new_int[0]
max=new_int[0]
for i in new_int:
    if(i>max):
        max=i
    elif(i<min):
        min=i
# # --------------------------------------------------------------#
max_lenght=len(s_str[0])
max_element=""
min_element=''
min_len=len(s_str[0])
# print(max_lenght,min_len)
for i in s_str:
    if(len(i)>max_lenght):
        max_lenght=len(i)
        max_element=i
    elif(len(i)<min_len):
        min_len=len(i)
        min_element=i
# --------------------------------------------------------------#

dic={
    'str':len(s_str),
    'nbr':len(new_int),
    'min_nbr':min,
    'max_nbr':max,
    'min_str':min_element,
    'max_str':max_element
}
print(dic)