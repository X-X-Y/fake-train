/**
 * @description 438. 找到字符串中所有字母异位词，medium，https://leetcode.cn/problems/find-all-anagrams-in-a-string
 * @param s 待查找字符串
 * @param p 目标异位词
 * @returns 
 */
function findAnagrams(s: string, p: string): number[] {
  let slow = 0
  let fast = 0
  let need = new Map()
  let win = new Map()
  let count = 0
  let res = []

  for(let item of p) need.set(item, (need.get(item) || 0) + 1)

  while(fast < s.length) {
    let c = s[fast]
    fast++
    if(need.has(c)) {
      win.set(c, (win.get(c) || 0) + 1)
      if(win.get(c) === need.get(c))
        count++
    }
    
    while(fast - slow >= p.length) {
      let d = s[slow]
      if(count === need.size) 
        res.push(slow)
      slow++
      if(need.has(d)) {
        if(win.get(d) === need.get(d)) 
          count--
        win.set(d, win.get(d) - 1)
      }
    }
  }

  return res
}

/**
 * @description 438. 找到字符串中所有字母异位词
 */
function run() {
  const s1 = 'cbaebabacd'
  const p1 = 'abc'
  const s2 = 'abab'
  const p2 = 'ab'

  console.log('-----------438. 找到字符串中所有字母异位词-----------')
  console.log(findAnagrams(s1, p1))  // [0, 6]
  console.log(findAnagrams(s2, p2))  // [0, 1, 2]
}

export default run
