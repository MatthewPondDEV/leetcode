/*Given two strings ransomNote and magazine, return true if ransomNote can be constructed by using the letters from magazine and false otherwise.

Each letter in magazine can only be used once in ransomNote.

 

Example 1:

Input: ransomNote = "a", magazine = "b"
Output: false
Example 2:

Input: ransomNote = "aa", magazine = "ab"
Output: false
Example 3:

Input: ransomNote = "aa", magazine = "aab"
Output: true
*/


/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
    let noteMap = new Map()

    for(let i = 0; i < magazine.length; i++){
        if(!noteMap.has(magazine[i])){
            noteMap.set(magazine[i], 1)
        }else{
            noteMap.set(magazine[i], noteMap.get(magazine[i]) + 1)
        }
    }
    
    for(let i = 0; i < ransomNote.length; i++){
        if(!noteMap.has(ransomNote[i])){
            return false
        }else{
            noteMap.set(ransomNote[i], noteMap.get(ransomNote[i]) - 1)
            if(noteMap.get(ransomNote[i]) == 0){
                noteMap.delete(ransomNote[i])
            }
        }
    }
    
    return true
};