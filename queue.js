class node{
    constructor(value)
    {
        this.value=value;
        this.next=null;
    }
}
class queue{
    constructor(value)
    {
        let newNode=new node(value)
        this.first=newNode;
        this.last=newNode;
        this.length=1;
    }
    enqueue(value)
    {
        if(!this.first)
        {
            return null;
        }
        let newNode=new node(value)
        let temp=this.last;
        this.last.next=newNode;
        this.last=newNode;
        this.length++;

    }
    dequeue()
    {
        if(!this.first)
        {
            return undefined;
        }
        let temp=this.first;
        this.first=this.first.next;
        temp.next=null;
        this.length--;
    }
}
let q=new queue(1)
q.enqueue(2)
q.enqueue(3)
q.enqueue(4)
q.enqueue(5)
q.dequeue()
console.log(q);
