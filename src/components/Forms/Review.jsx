import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@chakra-ui/button';
import '../App/App.css';



function Review() {
    const form1 = useSelector(store => store.submissionReducer);


    const feelingScore = useSelector((store) => store.feelingReducer);
    const understandScore = useSelector((store) => store.understandReducer);
    const supportScore = useSelector((store) => store.supportReducer);
    const commentsScore = useSelector((store) => store.commentsReducer);
    const history = useHistory();

    let review = {
        feeling: feelingScore,
        understanding: understandScore,
        support: supportScore,
        comments: commentsScore
    }

    const submitFeedback = () => {
        console.log('Posting Feedback');

        axios({
            method: 'POST',
            url: '/',
            data: review,
            //posting to postico is working

        }).then((response) => {
            console.log(response);

        });
        history.push('/submit');


    }
    // .catch((error) => {
    //     alert('Error dispatching');
    //     console.log(error);
    // })

    //we can't use a review of feedback from table, because nothing is posted yet
    //we can use this axios call to post after we validate...for now just make sure post is working

    return (
        <div className="review">
            <h2>Review Your Feedback</h2>

            <span>Feeling: </span><span className="right-justify">{feelingScore}</span>
            <br></br>
            <span>Understanding: </span><span className="right-justify">{understandScore}</span>
            <br></br>
            <span>Support: </span><span className="right-justify">{supportScore}</span>
            <br></br>
            <span>Comments: </span><span className="right-justify">{commentsScore}</span>
            <br></br>
            <br></br>
            <br></br>

            <button className="review-button" onClick={(event) => submitFeedback(event)}>Submit</button>


        </div>

    );


};


export default Review;


//testing ways to create space
{/* <div className="review">
<h2>Feeling: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{feelingScore}</h2>
<h2>Understanding: &nbsp;&nbsp;&nbsp;{understandScore}</h2>
<h2>Support: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{supportScore}</h2>
<h2>Comments: &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{commentsScore}</h2>
<button onClick={(event) => submitFeedback(event)}>Submit</button> */}