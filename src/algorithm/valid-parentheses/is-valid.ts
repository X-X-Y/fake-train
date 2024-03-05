/**
 * @description 20. 有效的括号，easy，https://leetcode.cn/problems/valid-parentheses/
 * @param s
 * @returns
 */
function isValid(s: string): boolean {
	const stack = []
	for (const item of s) {
		if (isLeft(item)) {
			stack.push(item)
		} else {
			if (stack.pop() !== match(item)) {
				return false
			}
		}
	}

	return stack.length ? false : true
}

/**
 * @description 判断是否是左括号
 * @param curs
 * @returns
 */
function isLeft(curs: string): boolean {
	if (curs === '(' || curs === '{' || curs === '[') return true
	return false
}

/**
 * @description 当前输入匹配的左括号
 * @param curs
 * @returns
 */
function match(curs: string): string {
	if (curs === ')') {
		return '('
	} else if (curs === '}') {
		return '{'
	} else if (curs === ']') {
		return '['
	}
	return ''
}

/**
 * @description 20. 有效的括号
 */
function run() {
	const s1 = '()'
	const s2 = '(]'

	console.log('-----------20. 有效的括号-----------')
	console.log(s1, isValid(s1)) // true
	console.log(s2, isValid(s2)) // false
}

export default run
