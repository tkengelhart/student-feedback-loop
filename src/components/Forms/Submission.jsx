import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from '@chakra-ui/button';
import { useHistory } from 'react-router-dom';


function Submission() {
    return (
        <div><h1>Successfully Submitted!</h1></div>
    )
}

export default Submission;
