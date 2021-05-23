import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import '../App/App.css';

function CommentsForm(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const [comments, setComments] = useState('');
    const form1 = useSelector(store => store.commentsReducer);

    function commentsResponse(event) {
        event.preventDefault();

        dispatch({
            type: 'ADD_COMMENTS',
            payload: comments,
        });
        console.log('This is what was typed', comments);
        history.push('/review');
    }

    return (

        <div>
            <h1>Any comments you want to leave?</h1>
            <form onSubmit={(event) => commentsResponse(event)}>
                <input
                    type="text"
                    name='Comments'
                    onChange={(event) => setComments(event.target.value)}>
                </input>
                <button>Next</button>

                <h2>Please press Next button to see a review of your feedback before submitting</h2>

            </form >

        </div >

    );
}

export default CommentsForm;
