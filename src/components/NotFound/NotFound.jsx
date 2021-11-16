import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
import CircularProgress from '@mui/material/CircularProgress';
function NotFound() {
    const navigate = useNavigate(); 

    const handleClick = async (e) => {
        e.preventDefault();
        navigate('/')
        
    }

    return (
        <div>
            <CircularProgress />
            <Button variant="contained" color="primary" onClick={handleClick}>Go Back</Button>
        </div>
    )
}

export default NotFound
