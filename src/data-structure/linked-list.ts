/**
 * @description 单链表节点类定义
 */
class ListNode {
  public val: number
  public next: ListNode | null

  constructor(val?: number, next?: ListNode | null) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
  }
}

/**
 * @description 传入值数组，创建链表
 * @param arr 待创建链表各节点值数组
 * @returns 表头节点
 */
function createLinkedList(arr: number[]): ListNode {
  const dummy = new ListNode()
  let p = dummy

  arr.forEach(item => {
    p.next = new ListNode(item)
    p = p.next
  })

  return dummy.next
}

/**
 * @description 将输入链表各节点值用-->连成字符串
 * @param p 待打印链表
 * @returns 输入链表值组成的字符串
 */
function printLinkedList(p: ListNode): string {
  let res = ''
  let curNode = p

  while(curNode) {
    res += curNode.val + ' --> '
    curNode = curNode.next
  }

  res += 'null'

  return res
}

export {
  ListNode,
  createLinkedList,
  printLinkedList
}
