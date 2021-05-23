import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../App/App.css';

function CommentsForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [comments, setComments] = useState(0);
    const form1 = useSelector(store => store.feelingReducer);

    const commentsResponse = (event) => {
        setComments(event.target.value);
    }
    // event.preventDefault();

    dispatch({
        type: 'ADD_COMMENTS',
        payload: comments
    });
    history.push('/review');


    return (

        <div>
            <h1>Any comments you want to leave?</h1>
            <form onSubmit={commentsResponse}>
                <input
                    type='text'
                    name='Comments'
                    onChange={(event) => setComments(event.target.value)}>
                </input>
                <button type="submit">Next</button>
                <h2>Please press Next button to see a review of your feedback before submitting</h2>

            </form >

        </div >

    );
}

export default CommentsForm;
