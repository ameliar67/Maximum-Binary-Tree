/**
 * @param {number[]} nums
 * @return {[number, number]}
 */
function getMaxValueAndIndex(arr) {

    let maxValue = Number.NEGATIVE_INFINITY;
    let maxIndex = -1;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > maxValue) {
            maxValue = arr[i];
            maxIndex = i;
        }
    }

    return [maxValue, maxIndex];
}

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var constructMaximumBinaryTree = function(nums) {

    let currMax = getMaxValueAndIndex(nums)[0];
    let positionMax = getMaxValueAndIndex(nums)[1]

    let l = nums.slice(0, positionMax);
    let ri = nums.slice((positionMax + 1), nums.length);

    let r = new TreeNode(currMax)

    function dfs(root, left, right)  {

        if(left.length >= 1)   {
            currMax = getMaxValueAndIndex(left)[0];
            positionMax = getMaxValueAndIndex(left)[1];

            root.left = new TreeNode(currMax);
            dfs(root.left, left.slice(0, positionMax), left.slice(positionMax + 1, left.length));
        }

        if(right.length >= 1)   {
            currMax = getMaxValueAndIndex(right)[0];
            positionMax = getMaxValueAndIndex(right)[1];

            root.right = new TreeNode(currMax);
            dfs(root.right, right.slice(0, positionMax), right.slice(positionMax + 1, right.length))
        }
        
        
    }

    dfs(r, l, ri)
    return r
};
