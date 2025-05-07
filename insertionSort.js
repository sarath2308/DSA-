function InsertionSort(arr)
{
    for(let i=1;i<arr.length;i++)
    {
        let val=arr[i];
        let j=i-1;
        while(j>=0 && arr[j]>val)
        {
            arr[j+1]=arr[j];
            j-=1
        }
        arr[j+1]=val
    }
    return arr;
}
console.log(InsertionSort([4, 3, 8, 1, 5]));
