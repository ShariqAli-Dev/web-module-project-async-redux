import React from 'react';
import { connect } from 'react-redux';
import { Grid } from '@material-ui/core';
import Cat from './Cat';
function CatList(props) {
  return (
    <Grid container>
      {props.cats.map((cat) => {
        return (
          <Grid key={cat.id} item xs={6} md={6} lg={6} xl={6}>
            <Cat cat={cat} />
          </Grid>
        );
      })}
    </Grid>
  );
}

const mapStateToProps = (state) => {
  return {
    cats: state.cats,
  };
};

export default connect(mapStateToProps, {})(CatList);
