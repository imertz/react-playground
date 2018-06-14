import React from "react";
import axios from "axios";

class PersonList extends React.Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.state = { persons: [{name: "hiMan", id:"123"}] ,
    inputValue :"Hi"};
    
  }
  
  handleChange (event)  {
    this.setState({ name: event.target.value, inputValue: event.target.value });
  };
  handleSubmit ( event )  {
    event.preventDefault();
    
    const user = {
      name: this.state.name
    };
    let inputValue = this.state.inputValue
    this.setState({persons: this.state.persons.concat(user), inputValue:''});
    axios
      .post(`https://jsonplaceholder.typicode.com/users`, { user })
      .then(res => {
        console.log(res);
        
      });
    
  };
  componentDidMount() {
    
    axios.get(`https://jsonplaceholder.typicode.com/users`).then(res => {
      const persons = res.data;
      this.setState({persons: this.state.persons.concat(persons)});
    });
  }

  render() {
    return (
      <div>
        <ul className="list-group">{this.state.persons.map(person => <li className="list-group-item"key={person.id}>{person.name}</li>)}</ul>
        <form onSubmit={this.handleSubmit}>
          <label>
            Person Name:
            <input type="text" name="name" onChange={this.handleChange} value={this.state.inputValue} />
          </label>
          <button className="btn btn-primary" type="submit">Add{this.inputValue}</button>
        </form>
      </div>
    );
  }
}

export default PersonList;
