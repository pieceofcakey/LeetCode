/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
const postorderTraversal = function (root) {
  if (!root) {
    return [];
  }

  const answer = [];
  const stack = [];

  let node = root;

  while (node || stack.length) {
    if (node) {
      stack.push(node);
      answer.unshift(node.val);
      node = node.right;
    } else {
      node = stack.pop();
      node = node.left;
    }
  }

  return answer;
};
