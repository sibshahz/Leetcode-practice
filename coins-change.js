
// function compare(a,b){
//     return b-a

// }
// var coinChange = function(coins, amount) {
//    coins.sort(compare);
//    //if current index is equal to amount return that accumulated value
//    let accVal=0;
//    const coinsUsed=[];
//    if(amount===0){
//     return 0;
//    }
//    if(coins.length===1){
//     if(coins[0]>amount){
//         console.log("Amount is incorrect");
//         return -1;
//     }else if(coins[0] === amount){
//         return coins.length;
//     }
//    }
//    console.log(coins)
//    for(let i=0;i<coins.length;i++){
//         if(accVal===amount){
//             return {
//                 numOfCoin: coinsUsed.length,
//                 coinsUsed,
//             }
//         }
//         while(accVal+coins[i]<=amount){
//             accVal+=coins[i];
//             coinsUsed.push(coins[i]);
//         }

//    }
//    if(accVal===amount){
//     // return coinsUsed.length;
//     return {
//         numOfCoin: coinsUsed.length,
//         coinsUsed,
//     }
//    }else{
//     return -1;

//    }
   
// };



/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */

// function compare(a,b){
//     return b-a

// }
// var coinChange = function(coins, amount) {
//    coins.sort(compare);
//    //if current index is equal to amount return that accumulated value
//    let accVal=0;
//    const coinsUsed=[];
//    if(amount===0){
//     return 0;
//    }

//    if(coins.length===1){
//     if(coins[0]>amount){
//         return -1;
//     }else if(coins[0] === amount){
//         return coins.length;
//     }
//    }


//    for(let i=0;i<coins.length;i++){
//         if(accVal===amount){
//             return coinsUsed.length;
//         }
//         while(accVal+coins[i]<=amount){
//             accVal+=coins[i];
//             coinsUsed.push(coins[i]);
//         }

//    }
   
//    if(accVal===amount){
//         return coinsUsed.length;
    
//    }else{
//     return -1;
//    }
   
// };

// const coinChange=(coins,amount)=>{
// const dp = Array(amount + 1).fill(Infinity); // This arr tells us how many coins we need for each amount.
// dp[0] = 0; // To make 0, we need 0 coins.
// for (let coin of coins) { // Check each coin
//   for (let i = coin; i <= amount; i++) { // Iterate through the entire amount from coin
//     dp[i] = Math.min(dp[i], dp[i - coin] + 1); // Update minimum number of needed coins.
//   }
// }
//     return dp[amount] === Infinity ? -1 : dp[amount]; // If the last element is Infinity, then we cannot make the amount.

// };

var coinChange = function(coins, amount) { 
    let result = countCoinChange(coins, amount)
    return result === Infinity ? -1 : result
};

const countCoinChange = (coins, amount, memo={}) => {
    if(amount === 0) return 0
    if(amount < 0) return Infinity
    if(memo[amount] !== undefined) return memo[amount]

    let min = Infinity 

    for(let coin of coins) {
        const restAmount = amount - coin 
        min = Math.min(countCoinChange(coins, restAmount, memo) + 1, min) 
    }

    memo[amount] = min
    return memo[amount] 
}
function minCoins(coins, amount) {
  const dp=new Array(amount+1).fill(Infinity);
  dp[0]=0;
  
  for(let i=1;i<=amount;i++){
    for(const coin of coins){
      if(i>=coin){
        dp[i]=Math.min(dp[i],dp[i-coin]+1);
      }
    }
  }

  return dp[amount] === Infinity ? -1 : dp[amount];
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  // const dp = new Array(amount + 1).fill(Infinity);

    // dp[0] = 0;
    // console.log(dp);
  
    // for (let i = 1; i <= amount; i++) { //i=1 i=2 i=3
    //   for (const coin of coins) { //coin=2 coin = 2
    //     if (i >= coin) { //i !>= 2  i==2
    //       dp[i] = Math.min(dp[i], dp[i - coin] + 1); //dp[2]=1
    //     }
    //   }
    // }
  
    // return dp[amount] === Infinity ? -1 : dp[amount];



  }
  
console.log(minCoins([2],4))
// console.log(coinChange([2],2))
// console.log(coinChange([1],0))
// console.log(coinChange([5,2,5,6],12))
console.log(minCoins([186,419,83,408],6249))

// console.log(coinChange([5,2,5,6],12))

// console.log(minCoins([2],1))
// console.log(minCoins([2],2))
// console.log(minCoins([1],0))
// console.log(minCoins([5,2,5,6],12))
// console.log(minCoins([186,419,83,408],6249))

// console.log(minCoins([5,2,5,6],12))
