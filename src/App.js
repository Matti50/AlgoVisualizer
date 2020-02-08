import React from 'react';
import './App.css';
import Grid from "./components/grid";


class App extends React.Component{

  constructor(props){
    super(props);
    /*FUTURE: MAKE START X AND J GENERIC - MOUSE CLICK */
    this.state = {
        sizeHor:30,
        sizeVer: 30,
        startX: 15,
        startJ: 2,
        endX: 15,
        endJ:27,
        
    }
    this.createGrid = this.createGrid.bind(this);
    this.setAdyacents = this.setAdyacents.bind(this);
}

/*IMPORTANT*/
/*HAVE TO FIX THIS VALUES ---- ALSO MAKE THEM GENERIC*/
setAdyacents(i,j,grid){
  if(i-1 !== -1){
    grid[i][j].adyacents.push({adyX:i-1,adyJ:j});
  }
  if(i+1 !== this.state.sizeHor){
    grid[i][j].adyacents.push({adyX:i+1,adyJ:j});
  }

  if(j+1 !== this.state.sizeVer){
    grid[i][j].adyacents.push({adyX:i,adyJ:j+1});
  }

  if(j-1 !==-1){
    grid[i][j].adyacents.push({adyX:i,adyJ:j-1});
  }

}


//HARDCODED START AND END NODE HERE
createGrid(){
    var grid = [];
    for(let i = 0; i< this.state.sizeHor;i++){
        grid[i] = [];
        for(let j = 0;j<this.state.sizeVer;j++){
            let isStart = (j === this.state.startJ && i === this.state.startX);
            let isEnd = (j === this.state.endJ && i === this.state.endX);
            grid[i][j] = {
                coorX: i,
                coorJ: j,
                isStart: isStart,
                isEnd: isEnd,
                isVisited: false,
                adyacents:[]
            }
            this.setAdyacents(i,j,grid);
        }
    }
    return grid;
}

render(){
  let grid = this.createGrid();
  return(
  <div className="main">
    <Grid grid={grid}></Grid>
  </div>)
}


}

export default App;
