import Card from '@mui/material/Card';
import { CardContent, CardMedia, Typography } from '@mui/material';
import image from '../assets/img/testi.png';
import Grid from '@mui/material/Unstable_Grid2/Grid2';
function ProjectsContent() {
    return (
            <Grid container spacing={2}>
                <Grid xs={6}>
                <Card sx={{boxShadow: 5}}>
                <CardMedia
                    component="img"
                    height="100"
                    width="100"
                    image={image}
                    alt="Project"
                />
                <CardContent>
                <Typography variant="body2" color="text.secondary">
                   Unity Project
                </Typography>
            </CardContent>
            </Card>
                </Grid>
                <Grid xs={6}>
                <Card sx={{boxShadow: 5}}>
                <CardMedia
                    component="img"
                    height="100"
                    width="100"
                    image={image}
                    alt="Project"
                />
                <CardContent>
                <Typography variant="body2" color="text.secondary">
                   Unity Project
                </Typography>
            </CardContent>
            </Card>
                </Grid>
                <Grid xs={6}>
                <Card sx={{boxShadow: 5}}>
                <CardMedia
                    component="img"
                    height="100"
                    width="100"
                    image={image}
                    alt="Project"
                />
                <CardContent>
                <Typography variant="body2" color="text.secondary">
                   Unity Project
                </Typography>
            </CardContent>
            </Card>
                </Grid>
                <Grid xs={6}>
                <Card sx={{boxShadow: 5}}>
                <CardMedia
                    component="img"
                    height="100"
                    width="100"
                    image={image}
                    alt="Project"
                />
                <CardContent>
                <Typography variant="body2" color="text.secondary">
                   Unity Project
                </Typography>
            </CardContent>
            </Card>
                </Grid>
            </Grid>
    )
}
export default ProjectsContent;