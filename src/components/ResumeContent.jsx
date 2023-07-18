import Card from '@mui/material/Card';
import { CardContent, CardMedia, Typography } from '@mui/material';

function ResumeContent() {
    return (
        <Card sx={{boxShadow: 5}}>
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                    Work experience... <br />
                    Work experience... <br />
                    Work experience... <br />
                    Work experience... <br />
                    Work experience... <br />
                    Work experience... <br />
                    Work experience... <br />
                </Typography>
            </CardContent>
        </Card>

    )
}
export default ResumeContent;