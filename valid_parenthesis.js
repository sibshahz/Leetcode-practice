function valid_parenthesis(arr) {
    /*
    1-Make a Empty stack.
    2-Make a pair of parenthess
    3-Itrate on given text.
    4-if open bracket add in stack else pop from stack and match with dic values.
    */
    let stack=[]
    let dic={'}':'{',']':'[',')':'('}
    for (let i = 0; i < arr.length; i++) {
        let curr=arr[i]
        if(Object.values(dic).includes(curr)){
            stack.push(curr)
        }else{
            // '('
            if (stack.length==0) {
                return false
            }else{
                tracker=stack.pop()
                if(dic[curr]!=tracker){
                    return false
            }
            }
        }

    }
    return stack.length==0
}

let arr="{{}}()["
console.log(valid_parenthesis(arr));