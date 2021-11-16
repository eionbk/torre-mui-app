import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import {searchPeople} from '../../Redux/Actions';
import { useState } from 'react';


function SearchBar() {
const [searchValue, setsearchValue] = useState("");
const dispatch = useDispatch();


const handleClick = (e) => {
    e.preventDefault();
    dispatch(searchPeople(searchValue));
    };
    console.log(searchValue);

    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
        >

            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search for People or skills"
                inputProps={{ 'aria-label': 'search google maps' }}
                onChange={(e) => setsearchValue(e.target.value)}
            />
            <IconButton 
            type="submit" 
            sx={{ p: '10px' }} 
            aria-label="search"
            onClick={handleClick}>
                <SearchIcon />
            </IconButton>

        </Paper>
    )
}

export default SearchBar
