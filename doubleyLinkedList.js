class Node{
    constructor(value)
    {
        this.data=value;
        this.next=null;
        this.prev=null;
    }
}
class DoublyLinkedList{
    constructor(value)
    {
        let node=new Node(value)
        this.head=node;
        this.tail=node;
        this.length=1;
    }
    push(value)
    {
        let newNode=new Node(value)
        let start=this.head;
        if(!this.head)
        {
            this.head=newNode;
            this.tail=newNode;
            this.length=1;
        }
        else
        {
            this.tail.next=newNode;
            newNode.prev=this.tail;
            this.tail=newNode;
            this.length++;
        }
    }
    pop()
    {
        if(!this.head)
        {
            return null;
        }
        else
        {
            let temp=this.tail;
            this.tail=temp.prev;
            this.tail.next=null;
            temp.next=null;
            temp.prev=null;
            this.length--;
        }
    }
    unshift(value)
    {
        let newNode=new Node(value)
        newNode.prev=null;
        newNode.next=this.head;
        this.head.prev=newNode;
        this.head=newNode;
        this.length++;

    }
    shift()
    {
        let temp=this.head;
        this.head=temp.next;
        this.head.prev=null;
        temp.next=null;
        this.length--;
    
    }
    reverse()
    {
        let start=this.head;
       while(start){
       start=start.next;
       
       }


        let temp=this.head;
        this.head=this.tail;
        this.tail=temp;
    }
}
let myLinkedList=new DoublyLinkedList(2)
myLinkedList.push(10)
myLinkedList.push(100)
myLinkedList.push(140)
myLinkedList.push(103)
myLinkedList.pop()
myLinkedList.shift()
console.log(myLinkedList);
