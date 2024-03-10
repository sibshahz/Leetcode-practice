/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    /*
    1-initalize the pointer k.
    2-itrate on the give array.
    3-if the currect element not equal to the given value.
        i-change the current element using the pointer k
        ii-increment the k
    4-return k
    */
    let k=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]!=val){
            nums[k]=nums[i]
            k+=1
        }
    }
    return k
};

let nums =[3,2,2,3]
let val=3
console.log(removeElement(nums,val));