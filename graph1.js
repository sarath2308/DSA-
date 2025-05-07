class Graph{
    constructor()
    {
        this.adjacencyList={}
    }
    addVertex(vertex)
    {
        if(!this.adjacencyList[vertex])
        {
            this.adjacencyList[vertex]=new Set()
            return "vertex added"
        }
        else
        {
          return "duplicate"
        }
    }
    addEdge(vertex1,vertex2)
    {
        if(!this.adjacencyList[vertex1])
        {
            this.addVertex(vertex1)
        }
        else if(!this.adjacencyList[vertex2])
        {
            this.addVertex(vertex2)
        }
        this.adjacencyList[vertex1].add(vertex2)
        this.adjacencyList[vertex2].add(vertex1)
    }
    print()
    {
       for(let vertex in this.adjacencyList)
       {
        console.log(`${vertex}=>${[...this.adjacencyList[vertex]]}`);
        
       }
        
    }
    removeVertex(vertex)
    {
        if(!this.adjacencyList[vertex])
        {
            return undefined;
        }
        for(let adjacent of this.adjacencyList[vertex])
        {
            this.removeEdge(vertex,adjacent)
        }
        delete this.adjacencyList[vertex]
    }
    removeEdge(vertex1,vertex2)
    {
        if(!this.adjacencyList[vertex1] || !this.adjacencyList[vertex2])
        {
            return "invalid vertex"
        }
        this.adjacencyList[vertex1].delete(vertex2)
        this.adjacencyList[vertex2].delete(vertex1)

    }
    hasEdge(vertex1,vertex2)
    {
        if(!this.adjacencyList[vertex1])
        {
            this.adjacencyList[vertex1]=new Set();
        }
        if(!this.adjacencyList[vertex2])
        {
            this.adjacencyList[vertex2]=new Set()
        }
        return this.adjacencyList[vertex1].has(vertex2) &&
        this.adjacencyList[vertex2].has(vertex1)

    }
    dfs(start,visited=new Set())
    {
    if(!this.adjacencyList[start])
    {
        return;
    }
    visited.add(start)
    console.log(start);
    
    for(let adjacent of this.adjacencyList[start])
    {
        if(!visited.has(adjacent))
        {
            this.dfs(adjacent,visited)
        }
    }
    }
    bfs(start)
    {
        if(!this.adjacencyList[start])
        {
            return;
        }
        let queue=[start];
        let visited=new Set()
        while(queue.length)
        {
            let vertice=queue.shift()
            if(!visited.has(vertice))
            {
            console.log(vertice);
            
            visited.add(vertice)
            for(let ad of this.adjacencyList[vertice])
            {
                if(!visited.has(ad))
                {
                    queue.push(ad)
                }
            }
        }
        }
    }
}
const graph=new Graph()
console.log(graph.addVertex('A'));
console.log(graph.addVertex('B'));
console.log(graph.addVertex('C'));
console.log(graph.addVertex('D'));
console.log(graph.addVertex('E'));
graph.addEdge('A','B')
graph.addEdge('A','C')
graph.addEdge('B','A')
graph.addEdge('B','D')
graph.addEdge('B','E')
console.log("dfs");
graph.dfs('A')
console.log("bfs");

graph.bfs('A')  
