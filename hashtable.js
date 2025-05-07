class HashTable{
    constructor(size)
    {
        this.table=new Array(size)
        this.size=size;
    }
    hash(key)
    {
        let total=0;
        for(let i=0;i<key.length;i++)
        {
           total+=key.charCodeAt(i)
        }
        return total % this.size;
    }
    set(key,value)
    {
        let index=this.hash(key);
        let bucket=this.table[index];
        if(bucket)
        {
            let bucketVal=bucket.find(val=>val[0]===key)
              if(bucketVal)
                 {
                 bucketVal[1]=value;
                 }
                 else
                 {
            bucket.push([key,value])
                 }
        }
        else
        {
            this.table[index]=[[key,value]]
        }
    }

    get(key)
    {
        let index=this.hash(key)
        let bucket=this.table[index];
        if(bucket)
        {
            let bucketVal=bucket.find(val=>val[0]===key)
            if(bucketVal)
            {
                return bucketVal[1]
            }
            else
            {
                return undefined;
            }
        }
    }
    remove(key)
    {
        let index=this.hash(key)
        let bucket=this.table[index];
        if(bucket)
        {
           let bucketVal=bucket.find(val=>val[0]===key)
           if(bucketVal)
           {
            bucket.splice(bucket.indexOf(bucketVal),1)
           }
           else
           {
            return undefined;
           }
        }
        else
        {
            return undefined
        }
    }
    display()
    {
        
        for(let i=0;i<this.table.length;i++)
        {
            if(this.table[i])
            {
                console.log(i,this.table[i]);
                
            }
        }
    }
}
let hashT=new HashTable(50)
hashT.set("name","sarath")
hashT.set("nema","erick")
hashT.remove('name')
hashT.display()
console.log(hashT.get('name'));
