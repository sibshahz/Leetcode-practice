function sum(array) {
    let s=0
    for (let i = 0; i < array.length; i++) {
        s+=array[i]
    }
    return s
}

function sliding_window(array,k) {
    let max_sum=0
    for (let i = 0; i < array.length-k+1; i++) {
        // console.log(i,'=> ',array.slice(i,k+i));
        let curr_sum=sum(array.slice(i,k+i))
        // console.log('curr_sum: ',curr_sum);
    
        if (curr_sum>max_sum) {
            max_sum=curr_sum
            // console.log('curr',curr_sum,'max_sum',max_sum);
        }
    }
    return max_sum
}
let array=[100,2,3,4,5,6]
let k=3
/*
[1,2,3]
[2,3,4]
[3,4,5]
[4,5,6]
*/
// 6-3=3
fun_cal=sliding_window(array,k)
console.log('maximum sum is: ',fun_cal);