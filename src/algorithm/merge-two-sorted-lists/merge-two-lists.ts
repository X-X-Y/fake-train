import {ListNode, createLinkedList, printLinkedList} from '@/data-structure/linked-list'

/**
 * @description 21. 合并两个有序链表，easy，https://leetcode.cn/problems/merge-two-sorted-lists/
 * @param list1 升序链表1
 * @param list2 升序链表2
 * @returns 合并后的升序链表
 */
function mergeTwoLists(list1: ListNode | null, list2: ListNode | null): ListNode | null {
  const dummy = new ListNode()
  let p = dummy
  let p1 = list1
  let p2 = list2

  while(p1 && p2) {
    if(p1.val < p2.val) {
      p.next = p1
      p1 = p1.next
    }else {
      p.next = p2
      p2 = p2.next
    }

    p = p.next
  }

  if(!p1) {
    p.next = p2
  }else {
    p.next = p1
  }

  return dummy.next
}

/**
 * @description 21. 合并两个有序链表
 */
function run() {
  const arr1 = createLinkedList([1, 2, 4])
  const arr2 = createLinkedList([1, 3, 4])

  console.log('-----------21. 合并两个有序链表-----------')

  const linkedArr = mergeTwoLists(arr1, arr2)
  
  console.log(printLinkedList(linkedArr))
  // console.log(mergeTwoLists(arr1, 2))
}

export default run
