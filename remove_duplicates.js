/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    /*
    1-Make an empty array.
    2-Itrate on given array and add a counter k.
    3-Add element in the new array if not present and increment the counter in new array else continue.
    4-Reassign the given array to unique array we created counter to so on
    5 return 5
    */
    let unique=[]
    let k=0
    for(let i =0;i <nums.length;i++){
        if(!unique.includes(nums[i])){
            unique.push(nums[i])
            k+=1
        }
    }
    // itrate a new loop to change the given array value
    for(let i =0;i<nums.length;i++){
        nums[i]=unique[i]
    }
    return k
    
};
let nums =[1,1,2]
console.log(removeDuplicates(nums));