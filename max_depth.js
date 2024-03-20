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
var maxDepth = function(root) {
    // 1-set the base condition
    // 2-Recursively call the fun for both left and right tree.
    // return the max of left or right tree 
    if(root==null){
        return 0
    }else{
        left_tree=maxDepth(root.left)
        right_tree=maxDepth(root.right)
    }

    result=Math.max(left_tree,right_tree)+1;
    return result
};