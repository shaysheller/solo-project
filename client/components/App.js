import React from "react";
import { Component } from "react";
import FirstLevel from "./FirstLevel";


class App extends Component {


constructor(props) {
    super(props);
    this.state = { 

        week: 1,
        weekGameArr: [],
    }



    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

}


async handleChange(event) {
    let week = event.target.value;

    await this.setState({
        week: week
    })
    event.preventDefault();
    console.log(this.state.week);
    
}

async handleSubmit(event) {
    event.preventDefault();
    const data = await fetch('/api/' + this.state.week);
    const result = await data.json();
    this.setState({
        weekGameArr: result
    })
    



}




async componentDidMount() {


    const data = await fetch('/api/' + this.state.week)
    const result = await data.json();

    this.setState({
        weekGameArr: result
    })


        
}



// home={} away={} homeScore={} awayScore={}


render() {
    const arr = this.state.weekGameArr;
    const result = [];
    for(let i = 0; i < arr.length; i++) {
        let elem = arr[i];

        const [home, away, hScore, aScore] = elem;
        result.push(<FirstLevel 
                        home={home} 
                        away={away} 
                        hScore={hScore} 
                        aScore={aScore}>
                    </FirstLevel>)
    }   

    const optionArr = [];
    for(let i = 1; i <= 18; i++) {
        optionArr.push(<option value={i}>{i}</option>)
    }


    return (
        <div id="app">
            <p class="week">WEEK {this.state.week}</p>
            {result}

            <form onSubmit={this.handleSubmit}>
                <label>WEEK SELECT</label>
                <br></br>
                <select value={this.state.week} onChange={this.handleChange}>
                    {optionArr}
                </select>
                <br></br>
                <button type="submit">Submit</button>
            </form>
            
        </div>
    );
}












}


export default App;










// class App extends Component {

//     constructor(props) {
//         super(props);
//         this.state = {
//             object: {},
//             array: [],
//             week: 1,
//             teamObj: {},
//             teamArr: [],
//             scheduleMode: 'weekly',
//             currentTeam: ''
//         }

//         this.handleChange = this.handleChange.bind(this);
//         this.handleSubmit = this.handleSubmit.bind(this);
//         this.handleDelete = this.handleDelete.bind(this);
//         this.handleTeamChange = this.handleTeamChange.bind(this);
//     }


//     handleSubmit(event) {
//         let week = this.state.weekForm;
//         const arr = this.state.object[week];

//         this.setState({
//             week: week,
//             array: [...arr]
//         })
//         event.preventDefault();
//     }


//     handleChange(event) {
        
//         let str;
//         if(event.target.value === 'weekly') {
//             str = 'Weekly Schedule'
//         } else {
//             str = 'Team Schedule'
//         }

//         this.setState({
//             scheduleMode: str
//         })
//     }

//     handleDelete(event) {
    
//         const newArr = [...this.state.array];
//         newArr.splice(event.target.id, 1);
//         this.setState({
//             array: newArr
//         })
//     }

//     handleTeamChange(event) {
//         const str = event.target.value;
//         this.setState({
//             currentTeam: str
//         })
//     }



    // componentDidMount() {
    //     fetch('/api')
    //         .then(res => res.json())
    //         .then((data) => {
    //             const currentArr = data.weeks[this.state.week]
    //             const teamKeys = Object.keys(data.teams);
    //             this.setState({
    //                 object: data.weeks,
    //                 array: [...currentArr],
    //                 teamObj: data.teams,
    //                 teamArr: teamKeys,
    //                 currentTeam: teamKeys[0]
    //             });
    //         })
    //         .catch((err) => {
    //             console.log('why');
    //         })
    // }


//     componentDidUpdate() {
//         console.log(this.state.weekForm);
//     }



//     render() {
//         const stateArr = this.state.array;
//         const teamArr = this.state.teamArr;
//         const arr = [];
//         if(stateArr.length && this.state.scheduleMode === 'weekly') {
//             for(let i = 0; i < stateArr.length; i++) {
//                 let elem = stateArr[i];
//                 arr.push(<FirstLevel game={elem} click={this.handleDelete} id={i}/>)
//             }
//         } 
        

//         const optionArr = [];

//         if(this.state.scheduleMode === 'weekly') {
//             for(let i = 1; i <= 18; i++) {
//                 optionArr.push(<option value={i}>{i}</option>)
//             }
//         } else {
//             for(let i = 0; i < 32; i++) {
//                 teamOptions.push(<option value={i}>{this.state.teamArr[i]}</option>)
//             }
//         }
        


        
        



//         return (
//             <div id="app">
                
//                 <h1>Week {this.state.week}</h1>
                
//                 {arr}
                
//                 <form onSubmit={this.handleSubmit}>
//                     <label>Schedule Display Mode</label> 
//                     <br></br>
//                     <select value={this.state.scheduleMode} onChange={this.state.handleChange}>
//                         <option>Weekly Schedule</option>
//                         <option>Team Schedule</option>
//                     </select>
                    
//                     <br></br>

//                     <label>Team / Week Select</label>
//                     <br></br>
//                     <select >
//                         {optionArr}
//                     </select>
//                     <br></br>
//                     <button type="submit">Submit</button>
                    
                
//                 </form>
//             </div>
//         )
//     }
// }

// export default App;




// else if(this.state.teamArr && !this.state.scheduleMode === 'Team') {
//     for(let i = 0; i < teamArr.length; i++) {
//         let elem = teamArr[i];
//         arr.push(<FirstLevel game={elem} click={this.handleDelete} id={i}/>)
//     }



{/* <select value={this.state.weekForm} onChange={this.handleChange}>
                        {optionArr}
                    </select>
                    <select value={this.state.currentTeam} onChange={this.handleTeamChange}>
                        {teamOptions};
                    </select> */}