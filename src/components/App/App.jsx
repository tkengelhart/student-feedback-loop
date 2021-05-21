import React from 'react';
import axios from 'axios';
import './App.css';
import CommentsForm from '../Forms/CommentsForm4';
import FeelingForm from '../Forms/FeelingForm1';
import Submission from '../Forms/Submission';
import SupportForm from '../Forms/SupportForm3';
import UnderstandingForm from '../Forms/UnderstandingForm2';
import Review from '../Review/Review';
import { HashRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';



function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>
        <Switch>
          <Route path='/1'>
            <FeelingForm />
          </Route>
          <Route path='/2'>
            <UnderstandingForm />
          </Route>
          <Route path='/3'>
            <SupportForm />
          </Route>  <Route path='/4'>
            <CommentsForm />
          </Route>  <Route path='/5'>
            <Review />
          </Route>
          <Route path='/submit'>
            <Submission />
          </Route>
        </Switch>

      </div>
    </Router>
  );
}

export default App;
