import Card from '@mui/material/Card';
import { CardContent, CardMedia, Typography } from '@mui/material';
function ProjectCard(props) {
    return (
        <Card sx={{ boxShadow: 5 }}>
            <CardMedia
                component="img"
                height="100"
                width="100"
                image={props.img}
                alt="Project"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    {props.desc}
                </Typography>
            </CardContent>
        </Card>
    )
}
export default ProjectCard;