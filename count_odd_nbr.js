/**
 * @param {number} low
 * @param {number} high
 * @return {number}
 */
var countOdds = function(low, high) {
    if(low%2!=0){
        let result=Math.floor(high-low)/2 +(high%2)
        return result
    }else{
        let result=Math.floor(high-low)/2 +(low%2)
        return result
    }
    
};