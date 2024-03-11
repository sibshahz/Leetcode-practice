let data=['str',9794,'dataof','str',9794,5,5,3,'7sibist','another string',777,'a','b']
// # find the nbr of element that are string and interger and return in an array
// # find the largest str
// # find the small str
// # find the largest nbr
// # find the smallest nbr


// # make a two list one contain str and second contain nbr
// # itrate on two new list and find the max ,min nbr,min str,max str

let new_int=[]
let s_str=[]
for (let i = 0; i < data.length; i++) {
    // console.log(typeof(data[i]));
    if (typeof(data[i])=='string') {
        s_str.push(data[i])
    }else if (typeof(data[i])=='number') {
        new_int.push(data[i])
    }
    
}
// console.log(new_int,s_str);
// // # --------------------------------------------------------------#
let min=new_int[0]
let max=new_int[0]
for (let i = 0; i < new_int.length; i++) {
    if (new_int[i]>max) {
        max=new_int[i]
    }else if (new_int[i]<min) {
        min=new_int[i]
    }
}
// console.log(min,max);
let max_len=s_str[0].length
let min_len=s_str[0].length
let max_element=''
let min_element=''
for (let i = 0; i < s_str.length; i++) {
    if (s_str[i].length>max_len) {
        max_element=s_str[i]
    }else if (s_str[i].length<min_len) {
        min_element=s_str[i]
    }
}

// console.log(max_element,min_element);

let dic={
    'str':s_str.length,
    'nbr':new_int.length,
    'min_nbr':min,
    'max_nbr':max,
    'min_str':min_element,
    'max_str':max_element
}
console.log(dic);
// console.log(new_int.length);