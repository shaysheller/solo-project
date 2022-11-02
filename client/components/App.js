import React from "react";
import { Component } from "react";
import FirstLevel from "./FirstLevel";


class App extends Component {

    constructor(props) {
        super(props);
        this.state = {
            object: {},
            week: 1,
            weekForm: ""
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    handleSubmit(event) {
        let week = this.state.weekForm;
        this.setState({
            week: week
        })
        event.preventDefault();
    }


    handleChange(event) {
        this.setState({
            weekForm: event.target.value
        })
    }



    componentDidMount() {
        fetch('/api')
            .then(res => res.json())
            .then((data) => {
                this.setState({
                    object: data
                });
            })
            .catch((err) => {
                console.log('why');
            })
    }


    componentDidUpdate() {
        console.log(this.state.weekForm);
    }



    render() {
        const arr = [];
        if(Object.keys(this.state.object).length) {
            const objArr = this.state.object[this.state.week];
            for(let i = 0; i < objArr.length; i++) {
                let elem = objArr[i];
                arr.push(<FirstLevel game={elem}/>)
            }
        }
        



        return (
            <div id="app">
                <h1>Week {this.state.week}</h1>
                {arr}
                <form onSubmit={this.handleSubmit}>
                    <label>Game Week</label>
                    <select value={this.state.weekForm} onChange={this.handleChange}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                        <option value="9">9</option>
                        <option value="10">10</option>
                        <option value="11">11</option>
                        <option value="12">12</option>
                        <option value="13">13</option>
                        <option value="14">14</option>
                        <option value="15">15</option>
                        <option value="16">16</option>
                        <option value="17">17</option>
                        <option value="18">18</option>

                    </select>
                    <button type="submit">Submit</button>

                </form>
            </div>
        )
    }
}

export default App;