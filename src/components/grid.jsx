import React from "react";
import Cell from "./cell";


class Grid extends React.Component{


    constructor(props){
        super(props);

        this.state = {
            sizeHor:30,
            sizeVer: 45,
            startX: 1,
            startJ: 20,
            endX: 20,
            endJ:40,
            
        }
        this.createGrid = this.createGrid.bind(this);
        var grid = this.createGrid();
    }

    //HARDCODED START AND END NODE HERE
    createGrid(){
        let grid = [];
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
                    isVisited: false
                }
            }
        }
        return grid;
    }
    

    render(){
       
       
       return(
        <div className="grid">
            {
                grid.map((cell) => (cell.map((c) => (<Cell key={c.coorJ+c.coorX} info={c}></Cell>))))
            }
        </div>)
            
}

    
}

export default Grid;