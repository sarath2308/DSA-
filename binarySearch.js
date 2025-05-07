// function binarySearch(arr,target)
// {
//     let left=0;
//     let right=arr.length-1;

//     while(left<=right)
//     {
//         let middleIndex=Math.floor((left+right)/2);
//         if(arr[middleIndex]===target)
//         {
//             return middleIndex;
//         }
//         if(arr[middleIndex]>target)
//         {
//             right=middleIndex-1
//         }
//         else
//         {
//             left=middleIndex+1
//         }
//     }
//     return -1;
// }

// console.log(binarySearch([1,3,2,4,5,10],10));

// function fibonacci(n)
// {
//     if(n===1)
//     {
//         return 1;
//     }
//     else if(n===0)
//     {
//         return 0;
//     }

//     return fibonacci(n-1)+fibonacci(n-2)
// }
// let result=fibonacci(6)
// console.log(result);

function Upper(str)
{
    let result=str.split(' ').map((word)=>
    {
        return word.charAt(0).toUpperCase()+word.slice(1).toLowerCase()
    }).join(' ')
    console.log(result);
    
}
Upper("sam is a fool")
