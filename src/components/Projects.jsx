import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Header from './Header';
import About from './About';
import ProjectsContent from './ProjectsContent';

function Projects() {
    return(
        <Grid container spacing={2} style={{width: '80%', margin: '0 auto'}}>
          <Grid item xs={12}> 
            <Header />
          </Grid>
          <Grid item xs={3}>
            <About />
          </Grid>
          <Grid item xs={9}>
            <ProjectsContent />
          </Grid>
        </Grid>
    )
}
export default Projects;