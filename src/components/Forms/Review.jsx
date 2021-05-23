import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@chakra-ui/button';



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
            <h2>Feeling: {feelingScore}</h2>
            <h2>Understanding: {understandScore}</h2>
            <h2>Support: {supportScore}</h2>
            <h2>Comments:{commentsScore}</h2>
            <button onClick={(event) => submitFeedback(event)}>Submit</button>


        </div>

    );


};


export default Review;