import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../App/App.css';

function CommentsForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [value, setValue] = useState(0);
    const form4 = useSelector(store => store.commentsReducer);

    function sendForm4() {
        axios({
            method: 'POST',
            url: '/'
        }).then(response => {
            console.log(response.data);
            dispatch({
                type: 'SEND_FORM4',
                payload: response.data
            })

        }).catch(error => {
            console.log('error on POST', error);
        });
    }

    useEffect(() => {
        console.log('in useEffect');
        sendForm4();
    }, []);

    function nextButton() {
        history.push('/review');
    }
    return (

        <div>
            <form onSubmit={(event) => nextButton(event)}>
                <input
                    type='text'
                    name='Comments'
                    onChange={(event) => setValue(event.target.value)}>
                </input>
                <button> Next</button>

            </form >

        </div >

    );
}

export default CommentsForm;
