
export function dijkstra(grid,size,startX,startJ){

    let seen = [];
    let distance = [];
    let parent = []
    for(let i=0; i<size;i++){
        seen[i] = [];
        distance[i] = [];
        parent[i] = [];
        for(let j=0;j<size;j++){
            seen[i][j] = false;
            distance[i][j] = Infinity;
            parent[i][j] = 0;
        }    
    }
    distance[startX] = [];
    distance[startX][startJ] = 0;
    console.log(distance[startX][startJ]);
    for(let i = 0;i<size;i++){
        for(let j = 0; j<size; j++){
            let minUnknown = getSmallerDistance(distance,size);
            if(grid[minUnknown.minX][minUnknown.minJ].isEnd){
                console.log("end");
                break;
            }
            seen[minUnknown.minX][minUnknown.minJ] = true;
            grid[minUnknown.minX][minUnknown.minJ].isVisited = true;
            let adyacents = grid[minUnknown.minX][minUnknown.minJ].adyacents;
            for(let h = 0; h<adyacents.length;h++){
                console.log(h);
                if(!seen[adyacents[h].adyX][adyacents[h].adyJ]){
                    if(distance[adyacents[h].adyX][adyacents[h].adyJ] > distance[minUnknown.minX][minUnknown.minJ] + 1){
                        distance[adyacents[h].adyX][adyacents[h].adyJ] = distance[minUnknown.minX][minUnknown.minJ] + 1;
                        parent[adyacents[h].adyX][adyacents[h].adyJ] = minUnknown;
                    }
                }
            }
        }
    }
    return grid;

}
/*
for(let h = 0; h<adyacents.length;h++){
    if(!seen[adyacents[h].adyX][adyacents[h].adyJ]){
        if(distance[adyacents[h].adyX][adyacents[h].adyJ] > distance[minUnknown.minX][minUnknown.minJ] + 1){
            grid[adyacents[h].adyX][adyacents[h].adyJ].isVisited = true;
            distance[adyacents[h].adyX][adyacents[h].adyJ] = distance[minUnknown.minX][minUnknown.minJ] + 1;
            parent[adyacents[h].adyX][adyacents[h].adyJ] = minUnknown;
        }
    }
}
*/


function getSmallerDistance(distanceVector,size){
    let min = Infinity;
    let pairOfCoords = null;
    for(let i = 0; i<size;i++){
        for(let j = 0;j<size;j++){
            if(distanceVector[i][j]<min){
                min = distanceVector[i][j];
                pairOfCoords = {minX:i,minJ:j};
            }
        }
    }
    return pairOfCoords;
}


