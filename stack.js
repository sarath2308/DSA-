class node{
    constructor(value)
    {
        this.value=value;
        this.next=null;
    }
}
class stack{
    constructor(value)
    {
        let newNode=new node(value)
        this.first=newNode;
        this.last=newNode;
        this.length=1;
    }
    push(value)
    {
        let newNode=new node(value)
        if(!this.length)
        {
          this.first=newNode;
          this.last=newNode;
          this.length=1;
        }
        newNode.next=this.first;
        this.first=newNode;
        this.length++;
    }
    pull()
    {
        if(!this.length)
        {
            return null;
        }
        let temp=this.first;
        this.first=this.first.next;
        temp.next=null;
        this.length--;
    }
}
let stack1=new stack(2)
stack1.push(3)
stack1.push(4)
stack1.pull()
console.log(stack1);
