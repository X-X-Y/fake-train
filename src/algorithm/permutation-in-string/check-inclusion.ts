/**
 * @description 567. 字符串的排列，medium，https://leetcode.cn/problems/permutation-in-string/
 * @param s1 目标排列字符串
 * @param s2 待查找字符串
 * @returns 
 */
function checkInclusion(s1: string, s2: string): boolean {
  let slow = 0
  let fast = 0
  let win = new Map()
  let need = new Map()
  let count = 0

  for(let item of s1) need.set(item, need.has(item) ? need.get(item) + 1 : 1)

  while(fast < s2.length) {
    const c = s2[fast]
    fast++
    
    if(need.has(c)) {
      win.set(c, win.has(c) ? win.get(c) + 1 : 1)
      if(win.get(c) === need.get(c))
        count++
    }

    while(fast - slow >= s1.length) {
      if(count === need.size) {
        return true
      }
      let d = s2[slow]
      slow++
      if(need.has(d)) {
        if(win.get(d) === need.get(d))
          count--
        win.set(d, win.get(d) - 1)
      }
    }
  }
  
  return false
}

/**
 * @description 567. 字符串的排列
 */
function run() {
  const s1 = 'ab'
  const s2 = 'eidbaooo'
  const s3 = 'ab'
  const s4 = 'eidboaoo'

  console.log('-----------567. 字符串的排列-----------')
  console.log(checkInclusion(s1, s2))  // true
  console.log(checkInclusion(s3, s4))  // false
}

export default run
