import React from "react";
import Cell from "./cell";
import {dijkstra} from "../js/dijkstra";
import { timeout } from "q";

class Grid extends React.Component{
    
    constructor(props){
        super(props);

        this.state = {
            grid: this.props.grid
        }
    }

    componentDidMount(){
        let newGrid = dijkstra(this.state.grid,30,15,2);
        console.log(newGrid);
        this.setState({grid: newGrid});
    }


    render(){
       /* WORKING EXAMPLE
       console.log(this.state.grid);
       let current = this.state.grid[4][2];
       current.isVisited = true;
       console.log(current);
       for(let i = 0; i<current.adyacents.length;i++){
           let adyX = current.adyacents[i].adyX;
           let adyJ = current.adyacents[i].adyJ;
           this.state.grid[adyX][adyJ].isVisited = true;
           console.log(this.state.grid[adyX][adyJ]);
       }
       */
       return(
        <div className="grid">
            {
                this.state.grid.map((cell) => (cell.map((c) => (<Cell key={c.coorJ+c.coorX} info={c}></Cell>))))
            }
        </div>)
            
}

    
}

export default Grid;