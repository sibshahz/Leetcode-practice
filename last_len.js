/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    /*
    1-trim the give string to so we can remove the space
    2-slit the string so str -> array
    3-reach the last element and apply the length fun 
    */
    s= s.trim().split(" ")
    return s[s.length-1].length 
};