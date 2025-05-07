class node{
constructor(value)
{
  this.value=value;
  this.next=null;
}
}
class LinkedList{
constructor(value)
{
  let newNode=new node(value)
  this.head=newNode;
  this.tail=newNode;
}
push(value)
{
  let newNode=new node(value)
  let temp=this.tail;
  this.tail.next=newNode;
  this.tail=newNode;
}
reverse()
{
    let prev=null;
    let next;
    let current=this.head;
    while(current!==null)
    {
        next=current.next;
        current.next=prev;
        prev=current;
        current=next
    }
    let temp=this.head;
    this.head=this.tail;
    this.tail=temp;
}
removelast(val)
{
    let lastprev=null;
    let lastOcc=null;
    let current=this.head;
    let prev=null;
    while(current!==null)
    {
        if(current.value===val)
        {
            lastOcc=current;
            lastprev=prev;

        }
        prev=current;
        current=current.next;
    }
        if(lastprev===null)
        {
            let temp=this.head.next;
            this.head.next=null;;
            this.head=temp
        }
        if(this.tail===lastOcc)
        {
            lastprev.next=null;
            this.tail=lastprev;
        }
        if(lastOcc===null)
        {
            console.log("element not found");
            
        }
        lastprev.next=lastOcc.next;
        lastOcc.next=null;

    }
    middle()
    {
        let fast=this.head;
        let slow=this.head;

        while(fast && fast.next!==null)
        {
          fast=fast.next.next;
          slow=slow.next;
        }
        return slow;
    }
    fromlast(n)
    {
        let fast=this.head;
        let slow=this.head;

        for(let i=0;i<n;i++)
        {
            if(fast===null) return;
            fast=fast.next;
        }
        while(fast && fast.next!==null)
        {
            fast=fast.next;
            slow=slow.next;
        }

        slow.next=slow.next.next;
    }
}
// let list=new LinkedList(1)
// list.push(2)
// list.push(3)
// list.push(4)
// list.push(5)
// list.push(6)
// list.push(9)
// // list.reverse()
// list.removelast(6)
// list.fromlast(1)
// console.log(list);

function palindrome(str,start=0,end=str.length-1)
{
    if(start>end)
    {
        return true;
    }
    if(str[start]!==str[end])
    {
       return false; 
    }
    return palindrome(str,start+1,end-1)
}

console.log(palindrome('MALAYALAM'));

