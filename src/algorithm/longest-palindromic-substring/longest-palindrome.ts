/**
 * @description 5. 最长回文子串，https://leetcode.cn/problems/longest-palindromic-substring/description/
 * @param s 
 * @returns 
 */
function longestPalindrome(s: string): string {
  function palindrome(str: string, left: number, right: number): string {
    while(left >= 0 && right < str.length && str[left] === str[right]) {
      left--
      right++
    }
    return str.slice(left + 1, right)
  }

  let res = ''
  for(let i = 0; i < s.length; i++) {
    const s1 = palindrome(s, i, i)
    const s2 = palindrome(s, i, i + 1)
    res = res.length > s1.length ? res : s1
    res = res.length > s2.length ? res : s2
  }

  return res
}

/**
 * @description 5. 最长回文子串
 */
function run() {
  const str1 = 'babad'
  const str2 = 'cbbd'

  console.log('-----------5. 最长回文子串-----------')
  console.log(longestPalindrome(str1))  // 'aba'
  console.log(longestPalindrome(str2))  // 'bb'
}

export default run
