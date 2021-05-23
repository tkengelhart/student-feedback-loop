import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@chakra-ui/button';
import { useHistory } from 'react-router-dom';


function Submission() {

    //use history to move to new page
    //dispatch if we want to dispatch to submit object
    const history = useHistory();
    const dispatch = useDispatch();


    //dispatch a reset to start feedback form over.
    const newFeedback = (event) => {
        dispatch({
            type: 'RESET',
        });
        history.push('/')
    }
    return (
        //show feedback submitted and a thank you ...reset or start again
        <>
            <div className="submit-box"><h1>⭐ Feedback submitted successfully ⭐ </h1></div>
            <div className="submit-box">

                <h1>Thank You!</h1>
                <button onClick={(event) => newFeedback(event)}>Leave new feedback</button>
            </div>
        </>
    )
}

export default Submission;
