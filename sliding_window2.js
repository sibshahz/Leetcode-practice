function find_max_profit(prices) {
let left=0
let right=1
let max_profit=0

while (right<prices.length) {
    if (prices[left]>prices[right]) {
        left=right
    }else{
        let diff=prices[right]-prices[left]
        // console.log(diff);
        if(diff>max_profit){
            
            max_profit=diff
        }
        right+=1
    };
}
return max_profit
}

let prices = [7,1,5,3,6,4,19]
console.log(find_max_profit(prices));
