function valid_palidrone(text) {
    /*set the base confition
    call the functio again if the length !=one
    */
   if(text.length==1|| text.length==0){
    return true
   }else{
    if(text[0]!=text[text.length-1]){
        // console.log(text);
        return false
    }else{
        return valid_palidrone(text.slice(1,-1))
    }
   }
}
let text='racecar'
console.log(valid_palidrone(text));

let text2='rac'
console.log(valid_palidrone(text2));
// console.log(text.slice(1,-1));