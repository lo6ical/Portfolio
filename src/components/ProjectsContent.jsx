import image from '../assets/img/testi.png';
import Grid from '@mui/material/Grid';
import ProjectCard from './ProjectCard';
function ProjectsContent() {
    return (
        <Grid container spacing={2}>
            <Grid xs={6}>
                <ProjectCard img={image} desc="diipa daapa" />
            </Grid>
            <Grid xs={6}>
                <ProjectCard img={image} desc="diipa daapa" />
            </Grid>
            <Grid xs={6}>
                <ProjectCard img={image} desc="diipa daapa" />
            </Grid>
            <Grid xs={6}>
                <ProjectCard img={image} desc="diipa daapa" />
            </Grid>
        </Grid>
    )
}
export default ProjectsContent;