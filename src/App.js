import React from "react"
import ReactDOM from "react-dom";
import moment from "moment"
import Mouse from './Mouse'

class App extends React.Component {
    constructor(props) {
        super(props)
        this.launchClock()
        this.state = {clock: moment().format("LTS"),
        counter: 0
        }
        this.handleClick = this.handleClick.bind(this)

    }

    handleClick(e) {
        this.setState({counter: ++this.state.counter})
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
                <Mouse 
                    counter={this.state.counter}
                    handler={this.handleClick}
                />
            </div>
        )
    }
}



ReactDOM.render(<App />, document.getElementById("app"))

export default App;

