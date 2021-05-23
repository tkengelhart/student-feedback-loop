import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../App/App.css';

function FeelingForm(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const [feeling, setFeeling] = useState(0);
    const form1 = useSelector(store => store.feelingReducer);

    function feelingResponse(event) {
        event.preventDefault();

        dispatch({
            type: 'ADD_FEELING',
            payload: feeling,
        });

        history.push('/understanding');

    }

    return (

        <div>
            <h1>How are you feeling today?</h1>
            <h3>1 being the worst, 5 being the best</h3>
            <form onSubmit={(event) => feelingResponse(event)}>
                <select
                    onChange={(event) => setFeeling(event.target.value)}>
                    <option value={'1'}>1</option>
                    <option value={'2'}>2</option>
                    <option value={'3'}>3</option>
                    <option value={'4'}>4</option>
                    <option value={'5'}>5</option>
                </select>
                <button>Next</button>

            </form >
        </div >

    );
}

export default FeelingForm;