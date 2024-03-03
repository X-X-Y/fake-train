/**
 * @description instancesOf关键字实现，检测targetObj对象是否是originObj类的实例
 * @param targetObj
 * @param originObj
 * @returns
 */
function myInstanceOf(targetObj, originObj): boolean {
	// let targetProto = Object.getPrototypeOf(targetObj)
	const targetProto = targetObj.__proto__
	const originProto = originObj.prototype
	if (!targetProto || !originProto) return false

	let curObj = targetProto
	while (curObj) {
		if (curObj === originProto) return true
		// curObj = Object.getPrototypeOf(curObj)
		curObj = curObj.__proto__
	}

	return false
}

/**
 * @description instancesOf关键字实现
 */
function run() {
	function Person(age) {
		this.age = age
	}
	function Student(name) {
		this.name = name
	}

	Student.prototype.__proto__ = Person.prototype

	const stu1 = new Student('xxy')

	console.log('-----------instancesOf关键字实现-----------')
	console.log(myInstanceOf(stu1, Student)) // true
	console.log(myInstanceOf(stu1, Person)) // true
	console.log(myInstanceOf({}, Student)) // false
}

export default run
