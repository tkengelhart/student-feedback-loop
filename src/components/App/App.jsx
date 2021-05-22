import React from 'react';
import axios from 'axios';
import './App.css';
import CommentsForm4 from '../Forms/CommentsForm4';
import FeelingForm1 from '../Forms/FeelingForm1';
import Submission from '../Forms/Submission';
import SupportForm3 from '../Forms/SupportForm3';
import UnderstandingForm2 from '../Forms/UnderstandingForm2';
import Review from '../Review/Review';
import { HashRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
// import { useState } from 'react';
// import { useSelector } from 'react-redux';



function App() {

  return (
    <Router>
      <div className='App'>
        <header className='App-header'>
          <h1 className='App-title'>Feedback!</h1>
          <h4>Don't forget it!</h4>
        </header>

        <Route path='/'>
          <p>This is where Feelings should go</p>
          <FeelingForm1 />
        </Route>
        <Route path='/2'>
          <p>This is where Understanding should go</p>

          <UnderstandingForm2 />
        </Route>
        <Route path='/3'>
          <p>This is where Support should go</p>

          <SupportForm3 />
        </Route>  <Route path='/4'>
          <p>This is where Comments should go</p>

          <CommentsForm4 />
        </Route>  <Route path='/5'>
          <p>This is where Review should go</p>

          <Review />
        </Route>
        <Route path='/submit'>
          <p>This is where Submission should go</p>

          <Submission />
        </Route>
      </div>
    </Router>
  );
}

export default App;
