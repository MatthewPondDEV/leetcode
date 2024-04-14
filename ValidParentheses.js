/*Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Every close bracket has a corresponding open bracket of the same type.
 

Example 1:

Input: s = "()"
Output: true
Example 2:

Input: s = "()[]{}"
Output: true
Example 3:

Input: s = "(]"
Output: false
*/

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    let stack = []
    let hashmap = {')':'(', '}':'{', ']':'['}
    let openBrackets = '({['
    let counter = 0
    for(let i = 0; i < s.length; i++) {
        if(openBrackets.includes(s[i]) === true) {
            stack.push(s[i])
            counter++
        }else if (hashmap[s[i]] === stack[stack.length-1]) {
            stack.pop()
        }
    }
    if (stack.length === 0 && s.length/2 === counter) {
        return true
    } else {
        return false
    }
};