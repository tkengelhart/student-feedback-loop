import { useSelector } from 'react-redux';
import React, { useState, useEffect } from 'react';
import axios from 'axios';


function Review() {
    const [feedback, setFeedback] = useState([]);
    useEffect(() => {
        console.log('in useEffect');
        reviewDisplay();
    }, []);

    const reviewDisplay = () => {
        console.log('Getting Review');
        axios({
            method: 'GET',
            url: '/',
        }).then((response) => {
            setFeedback(response.data);
            console.log(response.data);
        });
    };
    return (
        <>
            <table>
                <thead>
                    <tr>
                        <th>Feeling</th>
                        <th>Understanding</th>
                        <th>Support</th>
                        <th>Comments</th>
                    </tr>
                </thead>
                <tbody>
                    {feedback.map((feedback) => (

                        <tr key={feedback.feeling}>
                            <td>{feedback.understanding}</td>
                            <td>{feedback.support}</td>
                            <td>{feedback.comments}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>


    );
}

export default Review;