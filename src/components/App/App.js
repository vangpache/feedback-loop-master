import React, { Component } from 'react';
// import axios from 'axios';
import './App.css';
import { connect } from 'react-redux';
import Home from '../Home/Home';
import Feelings from '../Feelings/Feelings';
import Understanding from '../Understanding/Understanding';
import Support from '../Support/Support';
import Comments from '../Comments/Comments';
import Review from '../Review/Review';
import Submission from '../Submission/Submission';
import Admin from '../Admin/Admin';

import 'typeface-roboto';

import { HashRouter as Router, Route } from 'react-router-dom';
// import axios from 'axios';

class App extends Component {


  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <h1 className="App-title">Feedback!</h1>
            <h4><i>Don't forget it!</i></h4>
          </header>
          <br />
          
          <Route exact path="/" component={Home} />
          <Route exact path="/feelings" component={Feelings}/>
          <Route exact path="/understanding" component={Understanding}/>
          <Route exact path="/support" component={Support} />
          <Route exact path="/comments" component={Comments} />
          <Route exact path="/review" component={Review} getFeedback={this.getFeedback}/>
          <Route exact path="/submission" component={Submission} />
          <Route exact path="/admin" component={Admin} />
        </div>
    
      </Router>
    );
  }
}

export default connect() (App);
