import React from "react";
import { Component } from "react";


class FirstLevel extends Component {
    constructor(props) {
        super(props);
    }


    render() {
        const {home, away, hScore, aScore} = this.props;

        return (
            <div class="first">
                <div class='home'>
                    {home} <br></br> {hScore}
                </div>
                <div>
                    VS.
                </div>
                <div class='away'>
                    {away} <br></br> {aScore}
                </div>
            </div>
        )
    }
}

export default FirstLevel;