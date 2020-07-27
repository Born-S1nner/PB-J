import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Header from './layout/header'
import About from './layout/tabs/About'
import Profile from './layout/tabs/profile'
import Footer from './layout/footer'
import User from "./layout/account/user"

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route  path="/About" component={About} /> 
          <Route  path="/profile" component={Profile}/>
          <Route path="/" render={props => (
            <React.Fragment>
              <User />
            </React.Fragment>
          )} />
          <Footer />
        </div>
      </Router>
    );
  }
}


export default App;
