import './App.css';
import Container from '@material-ui/core/Container';
import { Paper, Card, Button, Grid } from '@material-ui/core';

import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
    width: '90%',
    margin: 'auto',
    textAlign: 'center',
  },
  paper: {
    height: '80vh',
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Paper className={classes.paper}>
          <Grid container spacing={4} justifyContent='center'>
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <h1>Generate Your Own Axolotl!</h1>
            </Grid>
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <Button variant='contained' color='secondary'>
                {'==> Click Me <=='}
              </Button>
            </Grid>
            <Grid item xs={12} md={12} lg={12} xl={12}>
              Testing
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

export default App;
