/*
Symbol       Value
I             1
V             5
X             10
L             50
C             100
D             500
M             1000
*/
let s="MCMXCIV"
let  dic={
    'I':1,
    'V':5,
    'X':10,
    'L':50,
    'C':100,
    'D':500,
    'M':1000
}
let sum=0
for (let i = 0; i < s.length; i++) {
    // console.log(s[i]); 
    if(Object.keys(dic).includes(s[i])){
        // console.log(dic[s[i]]);
        sum+=dic[s[i]]
    }
}
console.log(sum);