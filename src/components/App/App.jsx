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
        <Route path='/feelings'><FeelingForm /></Route>
        <Route path='/understanding'><UnderstandingForm /></Route>
        <Route path='/support'><SupportForm /></Route>
        <Route path='/comments'><CommentsForm /></Route>
        <Route path='/review'><Review /></Route>
        <Route path='/submit'><Submission /></Route>
      </div>
    </Router>
  );
}

export default App;
