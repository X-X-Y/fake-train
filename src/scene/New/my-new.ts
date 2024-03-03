/**
 * @description new关键字实现
 * @param target 原型函数
 * @param args 原型函数接收的参数
 * @returns 实例化的对象
 */
function myNew(target: (...any) => any, ...args: any[]): object {
	const obj = {}
	obj['__proto__'] = target.prototype
	// const obj = Object.create(target.prototype)
	const res = target.call(obj, ...args)

	if (
		(typeof res === 'object' && typeof res !== null) ||
		typeof res === 'function'
	) {
		return res
	}

	return obj
}

/**
 * @description new关键字实现
 */
function run() {
	function Student(name) {
		this.name = name
	}
	Student.prototype.work = () => {
		console.log(`${this.name} is working`)
	}

	console.log('-----------new关键字实现-----------')
	console.log(myNew(Student, 'xxy'))
}

export default run
