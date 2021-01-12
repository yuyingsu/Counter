import React,{ Component } from "react";

export class Counter extends Component{

    constructor(props) {
        super(props);
        this.state = {
            count:0
        }
    }

    handleIncrement= () => {
        this.setState({count: this.state.count+1});
    }

    handleDecrement= () => {
        this.setState({count : this.state.count-1});
    }

    render(){

        return(
            <div>
                {this.state.count}
                <p>
                    <button onClick={this.handleIncrement} style={btnStyle} className="btn btn-secondary btn-sm">Increment</button>
                    <button onClick={this.handleDecrement} style={btnStyle} className="btn btn-secondary btn-sm">Decrement</button>
                </p>
            </div>
        );
    }

}

const btnStyle = {
    border: 'none',
    padding: '5px 9px',
    cursor: 'pointer',
    float: 'right'
}


