/* Given a string s, reverse only all the vowels in the string and return it.

The vowels are 'a', 'e', 'i', 'o', and 'u', and they can appear in both lower and upper cases, more than once.

 

Example 1:

Input: s = "hello"
Output: "holle"
Example 2:

Input: s = "leetcode"
Output: "leotcede"
 

Constraints:

1 <= s.length <= 3 * 105
s consist of printable ASCII characters.
*/

 var reverseVowels = function(s) {
    let arr = s.split('')
    const vowel = 'aeiouAEIOU'
    let inputVowels = arr.filter(val => vowel.includes(val)).reverse()
    let vowelCounter = 0;

    for(let i = 0; i < arr.length; i++) {
        if (vowel.includes(arr[i])) {
            arr[i] = inputVowels[vowelCounter]
            vowelCounter++
            }
    }
    return arr.join('')
}