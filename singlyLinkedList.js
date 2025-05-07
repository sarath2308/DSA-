// class Node{
//   constructor(value)
//   {
//     this.data=value;
//     this.next=null;
//   }
// }
// class LinkedList{

//   constructor(value)
//   {
//     this.head=new Node(value)
//     this.tail=this.head;
//     this.length=1;
//   }
//   push(value)
//   {
//     let newNode=new Node(value)
//     if(!this.head)
//     {
//       this.head=newNode;
//       this.tail=newNode;
//       this.length=1;
//     }
//     else{
//       this.tail.next=newNode;
//       this.tail=newNode;
//       this.length++;
//     }
//   }
//   pop()
//   {
//     if(!this.head)
//     {
//        return undefined;
//     }
//     else{
//     let temp=this.head
//     let prev=this.head
//     while(temp.next)
//     {
//       prev=temp;
//       temp=prev.next;
//     }
//     this.tail=temp;
//     this.tail.next=null;
//     this.length--;
//   }

//   }

//   unshift(value)
//   {
//    let newNode=new Node(value)
//    newNode.next=this.head;
//    this.head=newNode;
//    this.length++;
//   }
//   shift()
//   {
//     let temp=this.head;
//     this.head=this.head.next;
//     temp.mext=null;
//     this.length--;
//   }
//   getFirst()
//   {
//     console.log(this.head);
//   }

//   getLast()
//   {
//     console.log(this.tail);
    
//   }

//   get(i)
//   {
//     let counter=0;
//     let temp=this.head;

//     while(temp)
//     {
//       if(counter===i)
//       {
//         return temp;
//       }
//       temp=temp.next;
//       counter++;
//     }
//     return null;
//   }
//   set(i,val)
//   {
//     let counter=0;
//     let temp=this.head;

//     while(temp)
//     {
//       if(counter===i)
//       {
//         temp.data=val;
//         return temp;
//       }
//       temp=temp.next;
//       counter++;
//     }
//     return null;
//   }
//   insert(val,i)
//   {
//     let newNode=new Node(val)
//     let counter=0;
//     let temp=this.head;
//     let prev=this.head;
//     while(temp)
//     {
//       if(counter===i)
//       {
//         prev.next=newNode;
//         newNode.next=temp;
//         this.length++;
//         return newNode;
//       }
//       prev=temp;
//       temp=temp.next;
//       counter++;
//     }
//     return false;
//   }
//   clear()
//   {
//     let temp=this.head;

//     while(temp)
//     {
//       let dis=temp;
//       temp=temp.next;
//       dis.next=null;
//     }
//     this.length=0;
//     this.head=null;
//     this.tail=null;
//   }
//   reverse()
//   {
//     let temp=this.head;
//     this.head=this.tail;
//     this.tail=temp;
//     let prev=null;
//     let next;
    
//     for(let i=0;i<this.length;i++)
//     {
//    next=temp.next;
//    temp.next=prev;
//    prev=temp;
//    temp=next;

//     }

//   }
//   getAll()
//   {
//     let temp=this.head;
//     if(!temp)
//     {
//       return false;
//     }
//     while(temp)
//     {
//       console.log(temp);
//       temp=temp.next;
      
//     }
//     return;
//   }
// }
// let myLinkedList=new LinkedList(3)
// myLinkedList.push(20)
// myLinkedList.push(10)
// myLinkedList.push(50)
// myLinkedList.push(100)
// myLinkedList.push(200)
// myLinkedList.reverse()
// myLinkedList.getAll()





// let a=[6,5,6,4,3,9]
// function track(arr)
// {
//   let j=arr.length-1;
//   for(let i=0;i<arr.length;i++)
//   {
//     if(arr[i]===6)
//     {
//       if(arr[j]===6)
//       {
//         j--;
//       }
//       let temp=arr[i];
//        arr[i]=arr[j];
//        arr[j]=temp;
//        j--;
//     }
//     if(i===j)
//     {
//       return arr;
//     }
//   }
 
// }
// let result=track(a);
// console.log(result);
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
  reverse() {
   let prev=null;
  let current=this.head;
  while(current!==null)
  {
    let next=current.next;
    current.next=prev;
    prev=current;
    current=next;
  }
  let temp=this.head;
  this.head=this.tail;
  this.tail=temp;
}
middle()
{
  let slow=this.head;
  let fast=this.head;
  let prev;
  while(fast!==null && fast.next!==null)
  {
     prev=slow;
    slow=slow.next;
    fast=fast.next.next;
  }
  prev.next=slow.next;
  slow.next=null;
}
print() {

 let current=this.head;
 while(current!==null)
 {
   console.log(current);
   current=current.next;
   
 }
 
}
lastOccurence(value)
{
 let prev
}
}
let list=new LinkedList(1)
list.push(2)
list.push(3)
list.push(4)
list.push(5)
list.push(6)
list.push(7)
list.push(8)
list.push(3)
list.push(10)
// list.reverse()
list.middle()
list.print()
