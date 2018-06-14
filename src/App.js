/* Import statements */
import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';
import Clock from './Clock'

/* Home component */
const Home = () => (
  <div>
    <h2>Home</h2>
  </div>
)

/* Category component */
const Category = () => (
  <div>
    <h2>Category</h2>
  </div>
)

/* Products component */
const Products = () => (
  <div>
    <h2>Products</h2>
  </div>
)

/* App component */
class App extends React.Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-light">
          <ul className="nav navbar-nav">

          
            <li><Link to="/">Home</Link></li>
            <li><Link to="/category">Category</Link></li>
            <li><Link to="/clock">Clock!</Link></li>

          </ul>
         </nav>

           
         <Switch>
         <Route exact path="/" component={Home}/>
         <Route path="/category" component={Category}/>
          <Route path="/clock" component={Clock}/>
       </Switch>

      </div>
    )
  }
}

export default App