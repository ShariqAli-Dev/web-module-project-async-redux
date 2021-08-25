import {
  Container,
  makeStyles,
  Paper,
  Card,
  Button,
  Grid,
} from '@material-ui/core';
import { connect } from 'react-redux';
import { grabAxolotl } from './actions';

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
  console.log(props.axolotols);

  return (
    <div className={classes.root}>
      <Container className={classes.container}>
        <Paper className={classes.paper}>
          <Grid container spacing={4} justifyContent='center'>
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <h1>Generate Your Own Axolotl!</h1>
            </Grid>
            <Grid item xs={12} md={12} lg={12} xl={12}>
              <Button
                variant='contained'
                color='secondary'
                onClick={() => {
                  console.log('the button is being clicked');
                  props.grabAxolotl();
                }}
              >
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

const mapStateToProps = (state) => {
  return {
    axolotols: state.axolotols,
  };
};

export default connect(mapStateToProps, { grabAxolotl })(App);
