/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    x=String(x)
    if(x.length==0 || x.length==1){
        return true
    }else{
        if(x[0]!=x[x.length-1]){
            return false
        }else{
            return isPalindrome(x.slice(1,-1))
        }
    }
};