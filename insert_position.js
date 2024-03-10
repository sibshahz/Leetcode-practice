/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    /*
    1-set the counter
    2-itrate on the give narray.
    4-if currwnt element is mathch to target
        i-return target
    5-else
        i-if current element is less then target 
        ii- increment the counter
    6-return counter
    */
    let counter=0
    for(let i=0;i<nums.length;i++){
        if(nums[i]==target){
            continue
        }else{
            if(nums[i]<target){
                counter+=1
            }
        }
    }
    return counter
};

let nums =[1,3,5,6]
let target=3
console.log(searchInsert(nums,target));