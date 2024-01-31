/**
 * @description 将一个版本号字符串生成一个迭代器
 * @param str 横线分割的数字字符串
 */
function* createIteratorS(str: string): Generator<number> {
  let curNum = ''
  for(let i = 0; i < str.length; i++) {
    const curChar = str[i]
    if(curChar === '-') {
      yield Number(curNum)
      curNum = ''
    }else {
      curNum += curChar
    }
  }

  if(curNum) {
    yield Number(curNum)
  }
}

/**
 * @description 比较两个字符串版本号大小
 * @param s1 横线分割的数字字符串
 * @param s2 横线分割的数字字符串
 * @returns s1 > s2 - 1 ; s1 < s2 - -1 ; s1 == s2 - 0
 */
function compare(s1: string, s2:string): number {
  const iter1 = createIteratorS(s1)
  const iter2 = createIteratorS(s2)
  while(true) {
    const n1 = iter1.next()
    const n2 = iter2.next()
    if(n1.done && n2.done) {
      return 0
    }else if(n1.done && !n2.done) {
      return -1
    }else if(!n1.done && n2.done) {
      return 1
    }else if(n1.value > n2.value) {
      return 1
    }else if(n1.value < n2.value) {
      return -1
    }
  }
}

/**
 * @description 测试版本号字符串比较函数compare
 */
function run() {
  const str1 = '1-12-52-21-0-53'
  const str2 = '1-22-52-21-0-53'
  const str3 = '1-22-52-21-0-53-9'
  
  console.log(compare(str1, str2))  // -1
  console.log(compare(str2, str3))  // -1
  console.log(compare(str3, str1))  // 1
}

export default run
