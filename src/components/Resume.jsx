import Grid from '@mui/material/Grid';
import Header from './Header';
import About from './About';
import ResumeContent from './ResumeContent';

function Resume() {
    return(
        <Grid container spacing={2} style={{width: '80%', margin: '0 auto'}}>
          <Grid item xs={12}> 
            <Header />
          </Grid>
          <Grid item xs={3}>
            <About />
          </Grid>
          <Grid item xs={9}>
            <ResumeContent />
          </Grid>
        </Grid>
    )
}
export default Resume;