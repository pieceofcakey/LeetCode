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
 * @return {number}
 */
const sumOfLeftLeaves = function (root) {
  const dfs = (node, isLeft = false) => {
    if (!node) {
      return 0;
    }

    if (!node.left && !node.right) {
      if (isLeft) {
        return node.val;
      }

      return 0;
    }

    return dfs(node.left, true) + dfs(node.right);
  };

  return dfs(root);
};
