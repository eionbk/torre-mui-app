import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import {allSkills} from '../../Redux/Actions';
import { Link } from 'react-router-dom';


function Landing() {
const dispatch = useDispatch()

    const handleClick = async () => {
        await dispatch(allSkills("gamma1994"))
    }

    return (
        <div>
            
            <h2>Welcome to Torre, log-in with your Torre user name!</h2>  
            <Link to='/Details'>
            <Button variant="contained" color="primary" onClick={handleClick} >Or click the button to check my Skills</Button>      
            </Link>  
        </div>
    )
}

export default Landing
