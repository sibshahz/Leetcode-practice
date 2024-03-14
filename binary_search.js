var search = function(nums, target) {
    let low=0
    let high =nums.length-1
    while(low<=high){
        let mid=Math.floor((high+low)/2)
        if(nums[mid]==target){
            return mid
        }else if(nums[mid]<target){
            low=mid+1
        }else{
            high=mid-1
        }
    }
    return -1
};

let nums =[-1,0,3,5,9,12]
let target=9
console.log(search(nums,target))