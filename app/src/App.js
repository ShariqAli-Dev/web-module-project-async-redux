import { Container, makeStyles, Paper, Button, Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { grabCat } from './actions';
import CatList from './components/CatList';

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

function App(props) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Paper className={classes.paper}>
          <Grid container spacing={4} justifyContent='center'>
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <h1>Generate Your Own Cat!</h1>
            </Grid>
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <Button
                variant='contained'
                color='secondary'
                onClick={() => props.grabCat()}
              >
                {'==> Click Me <=='}
              </Button>
            </Grid>
            <CatList />
          </Grid>
        </Paper>
      </Container>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {};
};

export default connect(mapStateToProps, { grabCat })(App);
