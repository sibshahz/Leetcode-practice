//[0,3,7,2,5,8,4,6,0,1] = 9
//[100,4,200,1,3,2] = 4

const consecSeq=(input)=>{
    const set=new Set(input.sort((a,b)=>{return a-b}))
    let maximum=1;
    let count=1;
    let prev=null;
    for(const item of set){
        if(prev===null){
            prev=item;
            continue;
        }
        if(prev === item-1){
            count++;
            maximum=Math.max(count,maximum);
            prev=item;
        }
        prev=item;
    }

    return maximum;
};
console.log(consecSeq([1,3,2,5,8]))

function findConsecutiveLength(arr) {
    if (arr.length === 0) return 0;
  
    const numSet = new Set(arr);
    let maxLength = 0;
    debugger;
    for (let num of arr) {
      if (!numSet.has(num - 1)) {
        let currentNum = num;
        let currentLength = 1;
  
        while (numSet.has(currentNum + 1)) {
          currentNum++;
          currentLength++;
        }
  
        maxLength = Math.max(maxLength, currentLength);
      }
    }
  
    return maxLength;
  }
  
  // Example usage:
  const arr = [0,1,3,2,5,8];
  const result = findConsecutiveLength(arr);
  console.log(result); 
  