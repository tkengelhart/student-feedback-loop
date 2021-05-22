import React from 'react';
import axios from 'axios';
import './App.css';
import Home from '../Home/Home'
import CommentsForm from '../Forms/CommentsForm';
import FeelingForm from '../Forms/FeelingForm';
import Submission from '../Forms/Submission';
import SupportForm from '../Forms/SupportForm';
import UnderstandingForm from '../Forms/UnderstandingForm';
import Review from '../Forms/Review';
import { HashRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
// import { useState } from 'react';
// import { useSelector } from 'react-redux';



function App() {

  return (
    <Router>
      <div className='App'>

        <Route path='/'><Home /></Route>
        <Route path='/feelings'><p>This is where Feelings should go</p><FeelingForm /></Route>
        <Route path='/understanding'><p>This is where Understanding should go</p><UnderstandingForm /></Route>
        <Route path='/support'><p>This is where Support should go</p><SupportForm /></Route>
        <Route path='/comments'><p>This is where Comments should go</p><CommentsForm /></Route>
        <Route path='/review'><p>This is where Review should go</p><Review /></Route>
        <Route path='/submit'><p>This is where Submission should go</p><Submission /></Route>


      </div>
    </Router>
  );
}

export default App;
