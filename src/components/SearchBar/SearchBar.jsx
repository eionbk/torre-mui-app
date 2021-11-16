import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import LoginIcon from '@mui/icons-material/Login';
import { useDispatch } from 'react-redux';
import {allSkills} from '../../Redux/Actions';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function SearchBar() {
const [searchValue, setsearchValue] = useState("");
const dispatch = useDispatch();
const navigate = useNavigate(); 


const handleClick = async (e) => {
    e.preventDefault();
    await dispatch(allSkills(searchValue));
    navigate('/Details')
    
}

    return (
        <>
        <img src="https://torre-media.s3-us-west-2.amazonaws.com/subtorres/Gig/torre.png" alt="logo"/>
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >
            
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="User"
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={(e) => setsearchValue(e.target.value)}
            />
            <IconButton 
            type="submit" 
            sx={{ p: '10px' }} 
            aria-label="search"
            onClick={handleClick}>
                <LoginIcon />
            </IconButton>

        </Paper>
        </>
    )
}

export default SearchBar
