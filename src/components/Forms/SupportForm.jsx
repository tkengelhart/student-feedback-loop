import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../App/App.css';

function SupportForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [support, setSupport] = useState(0);
    const form1 = useSelector(store => store.feelingReducer);

    const supportResponse = (event) => {
        setSupport(event.target.value);
    }
    // event.preventDefault();

    dispatch({
        type: 'ADD_SUPPORT',
        payload: support
    });
    history.push('/comments');

    return (

        <div>
            <h1>How well are you being supported?</h1>
            <h3>1 being the worst, 5 being the best</h3>
            <form onSubmit={supportResponse}>
                <select
                    name='Value'
                    onChange={(event) => setSupport(event.target.value)}>
                    <option value={'1'}>1</option>
                    <option value={'2'}>2</option>
                    <option value={'3'}>3</option>
                    <option value={'4'}>4</option>
                    <option value={'5'}>5</option>
                </select>
                <button type="submit">Next</button>

            </form >
        </div >

    );
}

export default SupportForm;