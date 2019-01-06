/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogActions from '@material-ui/core/DialogActions';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Events from '../components/Events';

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

class Index extends React.Component {
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <Typography variant="h1" gutterBottom className={classes.headline}>
          Happening Soon
        </Typography>
        <Events className={classes.events}/>
        <Link href="/about">
		      <Button variant="contained" color="primary" className={classes.button}>
		        Create an Event
		      </Button>
        </Link>
      </div>
    );
  }
}

Index.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Index);