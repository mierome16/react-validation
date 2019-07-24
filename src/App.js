import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom'
import './App.css';
import Form from './Form';
import SubmitPage from './SubmitPage'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Form}/>
          <Route path="/submitted" component={SubmitPage}/>
        </div>
      </Router>
    )
  }
}

export default App;
