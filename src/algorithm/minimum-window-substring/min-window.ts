/**
 * @description 76. 最小覆盖子串，hard，https://leetcode.cn/problems/minimum-window-substring/description/
 * @param s 待查询字符串
 * @param t 目标字符串
 * @returns 
 */
function minWindow(s: string, t: string): string {
  const need = new Map()
  const window = new Map()
  for(let charT of t) {
    need.set(charT, need.has(charT) ? need.get(charT) + 1 : 1)
  }

  let left = 0
  let right = 0
  let valid = 0
  let start = 0
  let len = Infinity
  while(right < s.length) {
    const c = s[right]
    right++
    if(need.has(c)) {
      window.set(c, window.has(c) ? window.get(c) + 1 : 1)
      if(window.get(c) === need.get(c)) {
        valid++
      }
    }
    
    while(valid === need.size) {
      const d = s[left]
      if(right - left < len){
        start = left
        len = right - left
      }
      left++
      if(need.has(d)) {
        if(window.get(d) === need.get(d)) 
          valid--
        window.set(d, window.get(d) - 1)
      }
    }
  }
  
  return len !== Infinity ? s.slice(start, start + len) : ''
}

/**
 * @description 76. 最小覆盖子串
 */
function run() {
  const s1 = 'ADOBECODEBANC'
  const s2 = 'a'
  const s3 = 'a'

  const t1 = 'ABC'
  const t2 = 'a'
  const t3 = 'aa'

  console.log('-----------76. 最小覆盖子串-----------')
  console.log(minWindow(s1, t1))  // 'BANC'
  console.log(minWindow(s2, t2))  // 'a'
  console.log(minWindow(s3, t3))  // ''
}

export default run
