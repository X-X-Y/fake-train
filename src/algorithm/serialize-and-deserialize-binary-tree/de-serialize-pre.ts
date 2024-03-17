import { TreeNode, createBinaryTree } from '@/data-structure/binary-tree'

/**
 * @description 297. 二叉树的序列化与反序列化-前序/序列化，hard，https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/
 * @param root
 * @returns
 */
function serializePre(root: TreeNode | null): string {
	const res = []

	function _serialize(root: TreeNode): void {
		if (root === null) {
			res.push('null')
			return
		}

		res.push(root.val)
		_serialize(root.left)
		_serialize(root.right)
	}

	_serialize(root)

	return res.join(',')
}

/**
 * @description 297. 二叉树的序列化与反序列化-前序/反序列化，hard，https://leetcode.cn/problems/serialize-and-deserialize-binary-tree/
 * @param data
 * @returns
 */
function deserializePre(data: string): TreeNode | null {
	if (!data.length) return null
	const nodeList = data.split(',')

	function _deserialize(list: string[]): TreeNode {
		const node = list.shift()
		if (node === 'null') return null
		const root = new TreeNode(parseInt(node))

		root.left = _deserialize(list)
		root.right = _deserialize(list)
		return root
	}

	return _deserialize(nodeList)
}

/**
 * @description 297. 二叉树的序列化与反序列化-前序
 */
function run() {
	const arr1 = [1, 2, 3, null, null, 4, 5]

	const tree1 = createBinaryTree(arr1)

	console.log('-----------297. 二叉树的序列化与反序列化-前序-----------')
	console.log(deserializePre(serializePre(tree1))) // [1,2,3,null,null,4,5]
}

export default run
