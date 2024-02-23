/**
 * @description 3. 无重复字符的最长子串，medium，https://leetcode.cn/problems/longest-substring-without-repeating-characters
 * @param s 
 * @returns 
 */
function lengthOfLongestSubstring(s: string): number {
  let slow = 0
  let fast = 0
  let win = new Map()
  let res = 0

  while(fast < s.length) {
    let c = s[fast]
    fast++
    win.set(c, (win.get(c) || 0) + 1)

    while(win.get(c) > 1) {
      let d = s[slow]
      slow++
      win.set(d, win.get(d) - 1)
    }

    res = res > fast - slow ? res : fast - slow
  }

  return res
}

/**
 * @description 3. 无重复字符的最长子串
 */
function run() {
  const s1 = ' '
  const s2 = 'abcabcbb'
  const s3 = 'bbbbb'

  console.log('-----------3. 无重复字符的最长子串-----------')
  console.log(lengthOfLongestSubstring(s1))  // 1
  console.log(lengthOfLongestSubstring(s2))  // 3
  console.log(lengthOfLongestSubstring(s3))  // 1
}

export default run
