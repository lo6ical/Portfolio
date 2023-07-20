import Card from '@mui/material/Card';
import Grid from '@mui/material/Grid';
import { CardContent, CardMedia, Typography } from '@mui/material';
import WorkHistory from './WorkHistory';
import Education from './Education';

function ResumeContent() {
    return (
        <Card sx={{ boxShadow: 5 }}>
            <CardContent>
                <Grid container spacing={2}>
                    <Grid item xs={12}>
                        <Typography className='resume_header' variant='h5'>Resume</Typography>
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <WorkHistory />
                    </Grid>
                    <Grid item sm={6} xs={12}>
                        <Education />
                    </Grid>
                </Grid>
            </CardContent>
        </Card>
    )
}
export default ResumeContent;