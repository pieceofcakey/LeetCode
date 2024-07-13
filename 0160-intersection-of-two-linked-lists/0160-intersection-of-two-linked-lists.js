/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
const getIntersectionNode = (headA, headB) => {
  let set = new Set();
  let copiedHeadA = headA;
  let copiedHeadB = headB;

  while (copiedHeadA !== null) {
    set.add(copiedHeadA);
    copiedHeadA = copiedHeadA.next;
  }

  while (copiedHeadB !== null) {
    if (set.has(copiedHeadB)) {
      return copiedHeadB;
    }

    copiedHeadB = copiedHeadB.next;
  }

  return null;
};
