import Card from '@mui/material/Card';
import Grid from '@mui/material/Unstable_Grid2';
import Avatar from '@mui/material/Avatar';

function About() {
    return(
        <Grid container spacing={2}>
            <Grid sx={12}>
                <Avatar alt="Joonas Saarela" src="../assets/img/goatifi.png"></Avatar>
            </Grid>
            <Grid sx={12}>
                <Card>About me!</Card>    
            </Grid>
        </Grid>
    )
}
export default About;