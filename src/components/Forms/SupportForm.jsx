import { useSelector, useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import '../App/App.css';

function SupportForm() {
    const dispatch = useDispatch();
    const history = useHistory();
    const [value, setValue] = useState(0);
    const form3 = useSelector(store => store.supportReducer);

    function sendForm3() {
        axios({
            method: 'POST',
            url: '/'
        }).then(response => {
            console.log(response.data);
            dispatch({
                type: 'SEND_FORM2',
                payload: response.data
            })

        }).catch(error => {
            console.log('error on POST', error);
        });
    }

    useEffect(() => {
        console.log('in useEffect');
        sendForm3();
    }, []);

    function nextButton() {
        history.push('/3');
    }


    return (

        <div>
            <form onSubmit={(event) => nextButton(event)}>
                <select
                    name='Value'
                    onChange={(event) => setValue(event.target.value)}>
                    <option value={'1'}>1</option>
                    <option value={'2'}>2</option>
                    <option value={'3'}>3</option>
                    <option value={'4'}>4</option>
                    <option value={'5'}>5</option>
                </select>
                <button> Next </button>
            </form >
        </div >

    );
}

export default SupportForm;