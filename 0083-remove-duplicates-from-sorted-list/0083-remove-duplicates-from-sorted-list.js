/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
const deleteDuplicates = function (head) {
  let current = head;

  while (current) {
    if (!current.next) {
      break;
    }

    while (current.next && current.val === current.next.val) {
      current.next = current.next.next;
    }

    current = current.next;
  }

  return head;
};
