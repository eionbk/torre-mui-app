import Button from '@mui/material/Button';
import { useNavigate } from 'react-router-dom';
function NotFound() {
    const navigate = useNavigate(); 

    const handleClick = async (e) => {
        e.preventDefault();
        navigate('/')
        
    }

    return (
        <div>
            <div>No user with that User Name</div>
            <Button variant="contained" color="primary" onClick={handleClick}>Go Back</Button>
        </div>
    )
}

export default NotFound
