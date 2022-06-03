import React, {Component} from "react";

export default class ClassComponent extends Component {

    render(){

        return(

            <h3>{this.props.value || 'ó céus'}</h3>

        )

    }

}