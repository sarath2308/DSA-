class Node
{
    constructor(value)
    {
        this.value=value;
        this.left=null;
        this.right=null;
    }
}
class BST{
    constructor()
    {
        this.root=null;
    }
    insert(value)
    {
      let node=new Node(value)
      let temp=this.root;
      if(this.root===null)
      {
        this.root=node;

        return this;
      }
      while(true)
      {
        if(temp.value===node.value)
        {
            return undefined;
        }


            if(node.value<temp.value)
            {
                if(temp.left===null)
                {
                    
                    temp.left=node;
                    return this;
                }
                else
                {
                    temp=temp.left;
                }
            }
            else
            {
              if(temp.right===null)
              {
                temp.right=node;
                return this;
              }
              else
              {
                temp=temp.right;
              }
            }
      }
    }
    search(root,value)
    {
        if(root===null)
        {
            return false;
        }
     if(root.value===value)
     {
        return true;
     }
     if(value<root.value)
     {
        return this.search(root.left,value)
     }
     else if(value>root.value)
     {
        return this.search(root.right,value)
     }
  }
  
preOrder(root)
{
    if(root)
    {
    console.log(root.value);
    this.preOrder(root.left);
    this.preOrder(root.right)
    }
    
}
inOrder(root)
{
    if(root)
    {
    this.inOrder(root.left);
    console.log(root.value);
    this.inOrder(root.right)
    }
    
}
postOrder(root)
{
    if(root)
    {
    this.postOrder(root.left);
    this.postOrder(root.right);
    console.log(root.value);
    
    }
    
}
levelOrder()
{
    const queue=[];
    queue.push(this.root)
    while(queue.length)
    {
        let current=queue.shift();
        console.log(current.value);
        if(current.left)
        {
            queue.push(current.left)
        }
        if(current.right)
        {
          queue.push(current.right)
        }
        
    }
}
min(root)
{
    if(!root.left)
    {
        return root.value;
    }
   return this.min(root.left)
}
max(root)
{
    if(!root.right)
    {
        return root.value;
    }
    return this.max(root.right)
}
delete(value)
{
    this.root=this.deleteNode(this.root,value)
}
deleteNode(root,value)
{
    if(root===null)
    {
        return root;
    }
    if(value<root.value)
    {
        root.left=this.deleteNode(root.left,value)
    }
    else if(value>root.value)
    {
        root.right=this.deleteNode(root.right,value)
    }
    else{
        if(!root.left && !root.right)
        {
            return null;
        }
        if(!root.left)
        {
            return root.right;
        }
        else if(!root.right)
        {
            return root.left;
        }
        root.value=this.min(root.right)
        root.right=this.deleteNode(root.right,root.value)
    }
    return root;
}

}
const tree=new BST()
tree.insert(5)
tree.insert(2)
tree.insert(3)
tree.insert(4)
tree.insert(8)
tree.insert(7)
tree.insert(1)
console.log(tree.search(tree.root,91));
// console.log("preorder...");

// tree.preOrder(tree.root)
// console.log("inorder...");
// tree.inOrder(tree.root)
// console.log("post order...");
// tree.postOrder(tree.root)
// console.log("BFS...");
// tree.levelOrder()
// console.log("min is:"+tree.min(tree.root));
// console.log("max is:"+tree.max(tree.root));






