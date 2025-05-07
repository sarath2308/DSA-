function bubblesort(arr)
{
    let count=0;
    let swap;
    do{
        swap=false;
    for(let i=0;i<arr.length;i++)
    {
        if(arr[i]>arr[i+1])
        {
            let temp=arr[i];
            arr[i]=arr[i+1];
            arr[i+1]=temp;
            swap=true
            count++;
        }
    }
}while(swap)

    return count;
}
console.log(bubblesort([3,4,2,1,6]));
