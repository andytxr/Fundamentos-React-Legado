import React, {Component} from "react";

export default class Counter extends Component{

    state = {

        n:0

    }


    inc(){

        this.setState({n: this.state.n + 1});

    }

    dec(){

        this.setState({n: this.state.n - 1});

    }

    render(){

        return(

            <div>
                <h2>Num: {this.props.n}</h2>
                <button onClick={this.inc}>Increment</button>
                <button onClick={this.dec}>Decrement</button>
            </div>

        )

    }

}