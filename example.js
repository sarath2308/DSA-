var levelOrder = function(root) {
  console.log(root);
  
  let result = []
  if (!root) return result

  let queue = [root]

  while (queue.length > 0) {
      let levelSize = queue.length
      let currentLevel = []

      for (let i = 0; i < levelSize; i++) {
          let node = queue.shift()
          currentLevel.push(node.val)

          if (node.left) queue.push(node.left)
          if (node.right) queue.push(node.right)
      }

      result.push(currentLevel)
  }

  return result
};
log