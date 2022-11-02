import React from "react";
import { Component } from "react";


class FirstLevel extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        return (
            <div class="first">{this.props.game}</div>
        )
    }
}

export default FirstLevel;