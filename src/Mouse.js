import React from 'react';

// class Mouse extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {counter: 0}
//     }

//     handleClick(event) {
//         this.setState({counter: ++this.state.counter})
//     }
//     render() {
//         return (
//             <div>
//                 <button
//                 onClick={this.handleClick.bind(this)}
//                 className="btn btn-primary">
//                 Don't click me {this.state.counter} times!
//                 </button>
//             </div>
//         );
//     }
// }


const Mouse = (props) => (
    <button
        onClick={props.handler}
        className="btn btn-outline-info btn-sm">
        Increase Volume <em>(Current Volume is {props.counter})</em>
    </button>
);

export default Mouse;


