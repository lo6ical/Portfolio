import './App.css'
import Grid from '@mui/material/Unstable_Grid2';
import Card from '@mui/material/Card';
import Header from './components/Header';
import About from './components/About';

function App() {

  return (
    <>
    <Grid container spacing={2}>
      <Grid xs={12}> 
         <Header />
      </Grid>
      <Grid xs={3}>
        <About />
      </Grid>
      <Grid xs={9}>
        <Card>xs=9{'\n'} asdasdasd {'\n'}asdasdasdd{'\n'}asdasdasd</Card>
      </Grid>
    </Grid>
    </>
  )
}

export default App
