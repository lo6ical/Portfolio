import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { HomeSharp } from '@mui/icons-material';
import Card from '@mui/material/Card';
import { useNavigate } from 'react-router-dom';

function Header() {
    const navigate = useNavigate();
    return (
        <>
            <Card sx={{backgroundColor: 'white', boxShadow: 5}}>
                <ButtonGroup variant="text" aria-label="text button group">
                    <Button onClick={() => navigate('/')}><HomeSharp color="primary" /></Button>
                    <Button onClick={() => navigate('/resume')}>Resume</Button>
                    <Button onClick={() => navigate('/projects')}>Projects</Button>
                </ButtonGroup>
            </Card>
        </>
    )
}
export default Header;