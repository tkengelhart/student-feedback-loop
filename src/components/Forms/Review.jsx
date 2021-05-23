import React, { useState, useEffect } from 'react';
import axios from 'axios';



function Review() {

    // const feelingScore = useSelector(store => store.feelingReducer);
    // const understandScore = useSelector(store => store.understandReducer);
    // const supportScore = useSelector(store => store.supportReducer);
    // const commentsScore = useSelector(store => store.commentsReducer);




    //we can't use a review of feedback from table, because nothing is posted yet
    //we can use this axios call to post after we validate...for now just make sure post is working

    return (
        <div>
            <p>Feeling: Score goes here</p>
            {/* <p>Understanding: {stateunderstandingReducer}</p>
            <p>Support: {supportReducer}</p>
            <p>Comments:{commentsReducer}</p> */}

        </div>


    );
}
const reviewDisplay = () => {
    console.log('Posting Feedback');
    axios({
        method: 'POST',
        url: '/',
    }).then((response) => {
        setFeedback(response.data);
        console.log(response.data);
    });
};

export default Review;