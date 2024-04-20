/*
You are given an array of unique integers salary where salary[i] is the salary of the ith employee.

Return the average salary of employees excluding the minimum and maximum salary.
Answers within 10-5 of the actual answer will be accepted.
*/
/**
 * @param {number[]} salary
 * @return {number}
 */
var average = function(salary) {
    let min_salary = Math.min(...salary);   // Using Math.min() to find the minimum value in the array               // Outputting the minimum salary value

    let max_salary = Math.max(...salary); 

    let result=0
    let divider=0

    for(let i =0;i<salary.length;i++){
        if(salary[i]!=min_salary & salary[i]!=max_salary){
            result+=salary[i]
            divider+=1
        }
    }
    return result/divider
};