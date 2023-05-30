import { Grid, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';
import ApplicationBar from './component/AppBar/AppBar.component';
import './App.css';
function App() {
  return (
    <>
      <ApplicationBar />
      <Container>
        <Grid container className='containerGrid'>
          <Grid item xs={12} className='mainGrid'>
            <Outlet />
          </Grid>
        </Grid>
      </Container>
    </>
  );
}

export default App;
