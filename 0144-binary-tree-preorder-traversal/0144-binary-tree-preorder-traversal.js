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
var preorderTraversal = function (root, list = []) {
  if (!root) {
    return list;
  }

  list.push(root.val);

  preorderTraversal(root.left, list);
  preorderTraversal(root.right, list);

  return list;
};
