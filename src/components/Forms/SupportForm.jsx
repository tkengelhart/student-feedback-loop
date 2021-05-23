import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import '../App/App.css';

function SupportForm(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const [support, setSupport] = useState(0);
    const form1 = useSelector(store => store.supportReducer);

    function supportResponse(event) {
        event.preventDefault();

        dispatch({
            type: 'ADD_SUPPORT',
            payload: support,
        });
        history.push('/comments');
    }
    return (

        <div className="form-box">
            <h1>How well are you being supported?</h1>
            <h3>1 being the worst, 5 being the best</h3>
            <form onSubmit={(event) => supportResponse(event)}>
                <select
                    required
                    onChange={(event) => setSupport(event.target.value)}>
                    <option value={''}></option>
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

export default SupportForm;