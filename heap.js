class minHeap{
    constructor()
    {
        this.heap=[]
    }
    insert(value)
    {
       this.heap.push(value)
       this.bubbleup()
    }
    remove()
    {
        this.heap[0]=this.heap.pop()
        this.bubbledown(0)

    }
    bubbleup()
    {
        let index=this.heap.length-1;
        while(index>0)
        {          
            let parent=Math.floor(index-1/2)
            if(this.heap[index]>=this.heap[parent])
            {
                break;
            }
            [this.heap[index],this.heap[parent]]=[this.heap[parent],this.heap[index]]
            index=parent;

        }
    }
    bubbledown(index)
    {
        let min=index;
        let left=2*index+1
        let right=2*index+2
        let length=this.heap.length-1;
        if(left<length && this.heap[left]<this.heap[min])
        {
            min=left;
        }
        if(right<length && this.heap[right]<this.heap[min])
            {
                min=right;
            }
            if(min!==index)
            {
                [this.heap[index],this.heap[min]]=[this.heap[min],this.heap[index]]
                this.bubbledown(min)
            }
    }
    print()
    {
        console.log(this.heap);
        
    }
}
const heap=new minHeap()
heap.insert(30)
heap.insert(20)
heap.insert(10)
heap.insert(2)
heap.insert(40)
heap.print()
console.log('-------------');
heap.remove()
heap.print()




