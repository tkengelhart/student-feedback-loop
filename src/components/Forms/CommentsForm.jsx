import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../App/App.css';

function CommentsForm(props) {
    //need history and dispatch
    const dispatch = useDispatch();
    const history = useHistory();

    //set values to capture inputs
    const [comments, setComments] = useState('');
    const form1 = useSelector(store => store.commentsReducer);

    function commentsResponse(event) {
        event.preventDefault();


        //dispatch scores to reducer / store

        dispatch({
            type: 'ADD_COMMENTS',
            payload: comments,
        });
        console.log('This is what was typed', comments);
        history.push('/review');
    }

    return (
        //set up form to capture feedback
        <div className="form-box">
            <h1>Any comments you want to leave?</h1>
            <form onSubmit={(event) => commentsResponse(event)}>
                <input
                    type="text"
                    name='Comments'
                    onChange={(event) => setComments(event.target.value)}>
                </input>
                <br></br>
                <br></br>


                <h2>Please press Next button to see a review of your feedback before submitting.</h2>
                <button>Next</button>


            </form >

        </div >

    );
}

export default CommentsForm;
