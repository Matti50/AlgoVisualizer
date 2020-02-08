import React from "react";
import "../css/cell.css"

class Cell extends React.Component{
    
    constructor(props){
        super(props)
    
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        console.log(this.props.info.coorX + "-"+this.props.info.coorJ);
        console.log(this.props.info.adyacents);
        console.log(this.props.info.isVisited);
    }


    
    render(){
        let classes = "cell";
        if(this.props.info.isEnd){
            classes += " end-node"
        }else if(this.props.info.isStart){
            classes += " start-node";
        }
        else if(this.props.info.isVisited){
            classes += " visited"
        }
        return(
            <div className={classes} onClick={this.handleClick}> 
                
            </div>
        );
    };
}

export default Cell;