import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../App/App.css';

//create form for understand feedback

function UnderstandingForm(props) {
    //need dispatch for sending feedback and history to push to next page

    const dispatch = useDispatch();
    const history = useHistory();

    //variable to set scores

    const [understand, setUnderstand] = useState(0);
    const form1 = useSelector(store => store.understandingReducer);

    function understandResponse(event) {
        event.preventDefault();

        //dispatch scores to reducer / store
        dispatch({
            type: 'ADD_UNDERSTAND',
            payload: understand,
        });
        //send to support page
        history.push('/support');
    }

    return (

        //form setup
        <div className="form-box">
            <h1>How well are you understanding the content?</h1>
            <h3>1 being the worst, 5 being the best</h3>
            <form onSubmit={(event) => understandResponse(event)}>
                <select
                    required
                    onChange={(event) => setUnderstand(event.target.value)}>
                    <option value={''} ></option>
                    <option value={'1'}>1</option>
                    <option value={'2'}>2</option>
                    <option value={'3'}>3</option>
                    <option value={'4'}>4</option>
                    <option value={'5'}>5</option>
                </select>
                <br></br>
                <br></br>

                <button>Next</button>
            </form >
        </div >

    );
}

export default UnderstandingForm;















