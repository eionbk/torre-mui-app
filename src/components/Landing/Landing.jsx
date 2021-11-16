import React from 'react';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux';
import {allSkills} from '../../Redux/Actions';
import { Link } from 'react-router-dom';


function Landing() {
const dispatch = useDispatch()

    const handleClick = () => {
        dispatch(allSkills("gamma1994"))
    }

    return (
        <div>
            Welcome to Torre, press the button to start!    
            <Link to='/Details'>
            <Button variant="contained" color="primary" onClick={handleClick} >CLICK ME</Button>      
            </Link>  
        </div>
    )
}

export default Landing
