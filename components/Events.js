import React, {Component} from 'react';
import PropTypes from 'prop-types';

import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import Event from '../components/Event';


const events = require('./Events.mock.json');

const styles = theme => ({
});


class Events extends Component {

  render() {
    console.log('Events - props: ', this.props);

    return (
      <Grid container spacing={24}>
      {events.map((event) =>
        <Grid key={'grid-item-event-' + event.id} item xs={4}>
          <Event details={event}/>
        </Grid>

      )}
      </Grid>
    );
  }
}

Events.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Events);