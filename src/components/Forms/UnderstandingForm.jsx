import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../App/App.css';

function UnderstandingForm(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const [understand, setUnderstand] = useState(0);
    const form1 = useSelector(store => store.understandingReducer);

    function understandResponse(event) {
        event.preventDefault();

        dispatch({
            type: 'ADD_UNDERSTAND',
            payload: understand,
        });
        history.push('/support');
    }

    return (

        <div>
            <h1>How well are you understanding the content?</h1>
            <h3>1 being the worst, 5 being the best</h3>
            <form onSubmit={(event) => understandResponse(event)}>
                <select
                    onChange={(event) => setUnderstand(event.target.value)}>
                    <option value={''}></option>
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

export default UnderstandingForm;















