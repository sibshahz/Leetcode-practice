// Input: nums = [1,3,4,2,2]
// Output: 2
/*
1-Make a empty set.
2-Itrate on the given list
3-if curret item in set => return current element
3-else add in empty set
*/
function find_duplicate(array) {
    let checker=new Set()
    for (let i = 0; i < array.length; i++) {
        if(checker.has(array[i])){
           return array[i]
        }else{
            checker.add(array[i])
        }
        
    }
}
let nums=[1,3,3,4,2,2]
console.log(find_duplicate(nums));
let num=[1,2,4,52,63,8,9,0,5,6,8,32]
console.log(find_duplicate(num));