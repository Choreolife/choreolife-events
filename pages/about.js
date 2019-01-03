/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing.unit * 4,
  },
  headline: {
  	fontSize: '21pt',
  	fontWeight: 400,
  	marginBottom: theme.spacing.unit * 3,
  },
  button: {
    margin: theme.spacing.unit * 3,
    marginLeft: 0,
  },  
});

function About(props) {
  const { classes } = props;

  return (
    <div className={classes.root}>
      <Typography variant="h1" gutterBottom className={classes.headline}>
        New Event
      </Typography>
      <Typography variant="subtitle1" gutterBottom>
      	Coming soon...
      </Typography>
      <Link href="/">
        <Button variant="contained" color="primary" className={classes.button}>
	      Save
		</Button>
      </Link>
      <Link href="/">
        <Button variant="contained" className={classes.button}>
	      Cancel
		</Button>
      </Link>
    </div>
  );
}

About.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(About);