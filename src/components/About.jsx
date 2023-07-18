import Card from '@mui/material/Card';
import image from '../assets/img/goatifi.png';
import { CardContent, CardMedia, Typography } from '@mui/material';

function About() {
    return (
        <Card sx={{boxShadow: 5}}>
            <CardMedia
                component="img"
                height="300"
                image={image}
                alt="Joonas Saarela"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    About me <br /> About me <br /> About me <br /> About me <br /> About me <br />
                </Typography>
            </CardContent>
        </Card>

    )
}
export default About;