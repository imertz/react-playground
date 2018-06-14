import React from "react"
import ReactDOM from "react-dom";
import moment from "moment"

class Clock extends React.Component {
    constructor(props) {
        super(props)
        this.launchClock()
        this.state = {clock: moment().format("LTS")}
    }

    launchClock() {
        setInterval(()=> {
            console.log('Updating time...')
            this.setState({
                clock: moment().format('LTS')
            })
        }, 1000)
    }

    render() {
        console.log('Rendering Clock...')
        return (
            <div>
                <p>{this.state.clock}</p>
            </div>
        )}
    }


export default Clock;

