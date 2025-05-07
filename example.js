// // class node{
// //     constructor(value)
// //     {
// //         this.prev=null;
// //         this.value=value;
// //         this.next=null;
// //     }
// // }

// // class LinkedList{
// //     constructor(value)
// //     {
// //         let newNode=new node(value)
// //         this.head=newNode;
// //         this.tail=newNode;
// //         this.length=1;
// //     }
// //     push(value)
// //     {
// //         let newNode=new node(value)
// //         newNode.prev=this.tail;
// //        this.tail.next=newNode;
// //        this.tail=newNode;
// //        this.length++;
// //     }
// //     reverse()
// //     {
// //         let current=this.head;
// //         while(current)
// //         {
// //             let swap=current.next;
// //             current.next=current.prev;
// //             current.prev=swap;
// //             current=swap;
// //         }
// //         let temp=this.head;
// //         this.head=this.tail;
// //         this.tail=temp;
// //     }
// // }
// // let list=new LinkedList(1)
// // list.push(2)
// // list.push(3)
// // list.reverse()
// // console.log(list);
// // let str="sarath124"
// // let digit=''
// // for(let char of str)
// // {
// //     if(!isNaN(char) && char!=="")
// //     {
// //      digit+=char
// //     }
// // }
// // console.log(digit);

// // let str="H Sarath me"
// // let strArr=str.split(' ');
// // let largest=''
// // let second=''

// // for(let i=0;i<strArr.length;i++)
// // {
// //  if(largest.length<strArr[i].length)
// //  {
// //     second=largest;
// //     largest=strArr[i];
// //  }
// //  else if(strArr[i].length!==second.length && strArr[i].length>second.length)
// //  {
// //     second=strArr[i]
// //  }
// // }
// // console.log(second);

// function palindrome(str)
// {
//     return str===str.split('').reverse().join('')
// }

// function pal(str)
// {
//     let longest=''
//     for(let i=0;i<str.length;i++)
//     {
//         for(let j=i+1;j<str.length;j++)
//         {
//             let sub=str.slice(i,j)
//             if(palindrome(sub) && sub.length>longest.length)
//             {
//                 longest=sub;
//                 console.log(longest);
                
//             }
//         }
//     }
//     return longest;
// }

// // console.log(pal('abarrtryrtrr'));


// //extract digit

// // function extract(str)
// // {
// //     let answer=str.match(/\d/g);
// //     return answer;
// // }
// // // console.log(extract('hello123h12'));

// // let str="ababsbdbfb"
// // let set=new Set(str)
// // let result=set.join('')

// // function reverse(str)
// // {
// //     if(str.length===1)
// //     {
// //         return str;
// //     }
// //    if(str.length===0)
// //     {
// //         return '';
// //     } 
// //     return reverse(str.slice(1))+str[0]
// // }
// // let str='Hello World'
// // let arr=str.split(' ')
// // let result='';
// // for(let word of arr)
// // {
// //  result+=reverse(word)
// //  result+=' '
// // }
// // console.log(result);
// // function subArr(arr)
// // {
// //     let start=-1;
// //     let end=-1;
// //     let max=Math.max(...arr)
// //     for(let i=0;i<arr.length;i++)
// //     {
// //         if(arr[i]===max)
// //         {
// //             if(start===-1)
// //             {
// //                 start=i;
// //             }
// //             end=i;
// //         }
// //         else if(start!==-1)
// //         {
// //             break;
// //         }
// //     }
// //     return [...arr.slice(0,start).concat(arr.slice(end+1))]
// // }
// // console.log(subArr([1,9,3,2,3,4,9]));

// // function occurence(str)
// // {
// //     let freq={}
// //     for(let char of str)
// //     {
// //         if(freq[char])
// //         {
// //             freq[char]++;
// //         }
// //         else
// //         {
// //             freq[char]=1;
// //         }
// //     }
// //     for(let i=str.length-1;i>=0;i--)
// //     {
// //         if(freq[str[i]]===1)
// //         {
// //             return str[i]
// //         }
// //     }
// //     console.log(freq);
    
// //     return null;
// // }
// // console.log(occurence('ababcabba'));


// function removeChar(str,char)
// {
//     if(str.length===0)
//     {
//         return'';
//     }

//     if(str[0]===char)
//     {
//         return removeChar(str.slice(1),char)
//     }
//     return str[0]+removeChar(str.slice(1))
// }
// // console.log(removeChar('Hello Sarath','o'));

// // function removeChar(str, char) {
// //     if (str.length === 0) {
// //       return '';
// //     }
  
// //     if (str[0] === char) {
// //       // Skip this character
// //       return removeChar(str.slice(1), char);
// //     }
  
// //     // Keep this character and recurse on the rest
// //     return str[0] + removeChar(str.slice(1), char);
// //   }
  
// //   console.log(removeChar('Hello Sarath', 'o')); // Output: "Hell Sarath"
  

// function flatten(arr)
// {
//     let result=[]
//   for(let val of arr)
//   {
//     if(Array.isArray(val))
//     {
//         result=result.concat(flatten(val))
//     }
//     else
//     {
//         result.push(val)
//     }
//   }
//   return result;
// }
// // console.log(flatten([1,[2,3,[1,4]]]));

// function removeChar(str,char)
// {
//     if(str.length===0)
//     {
//         return '';
//     }
//     if(str[0]===char)
//     {
//         return removeChar(str.slice(1),char)
//     }
//     return str[0]+removeChar(str.slice(1),char)
// }

// // console.log(removeChar("hollogram","o"));

// function findMin(nums) {
//    let left=0;
//    let right=nums.length-1;
//     while(left<right)
//     {
//         let mid=Math.floor((left+right)/2)
//         if(nums[mid]>nums[right])
//         {
//             left=mid+1;
//         }
//         else
//         {
//             right=mid-1
//         }
//     }
//     return nums[left]
//   }
//   console.log(findMin([4, 5, 6, 7, 0, 1, 2]));
  let str="sarath"
  let res=str.slice(1)
  console.log(res);
  

  