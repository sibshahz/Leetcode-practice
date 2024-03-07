/* Given an array that contain twise of nbr find the non twise nbr   */
/* 1-Make a empty set 
    2-itrate on list
    3-chek the current element in set 
    4-remove them
    5-else add them 
    6-At the end returb the set 
*/
function find_non_twise(arr) {
    let data=new Set()
    for (let i = 0; i < arr.length; i++) {
        // console.log(arr[i]);
        if(data.has(arr[i])){
            data.delete(arr[i])
        }else{
            data.add(arr[i])
        }
    }
    return data
}

let arr=[1,1,2,2,3,3,4,4,5]
console.log(find_non_twise(arr));