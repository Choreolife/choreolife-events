import React, {Component} from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Moment as ReactMoment } from 'react-moment';
import Moment from 'moment';
import PlaceIcon from '@material-ui/icons/Place';


const styles = theme => ({
  title: {
  },
  eventTime: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 700 /* 700 = bold */
  },
  locationContainer: {
    display: 'flex',
    justifyContent: 'flex-end',
    margin: 5
  },
  location: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end'
  },
  addressContainer: {
    display: 'flex',
    flexDirection: 'row'
  },
  placeContainer: {
    minHeight: 20 // probably a better way to do this using flexbox...
  },
  placeIcon: {
    position: 'relative',
    top: -5
  },
});
class Event extends Component {

  render() {
    console.log('Event - props: ', this.props);

    const { details, classes } = this.props;
    const momentDate = new Moment(details.date);

    return (
      <div>
        <Card>
          <CardContent>
            <div className={classes.eventTime}>
              <Typography color="textSecondary" variant="subtitle2">
                  {momentDate.format('dddd, MMMM Do YYYY')}
              </Typography>
              <Typography color="textSecondary" variant="subtitle2">
                  {momentDate.format('hh:mm A')}
              </Typography>
            </div>
            <div>
              <Typography color="textSecondary" variant="h4">
                {details.title}
              </Typography>
            </div>
            {details.location && <div className={classes.locationContainer}>
              <div className={classes.location}>
                <div className={classes.placeContainer}>
                  <Typography color="textSecondary" variant="h6">{details.location.placeName}</Typography>
                </div>
                <div className={classes.addressContainer}>
                  <PlaceIcon className={classes.placeIcon}/><Typography color="textSecondary">{details.location.address}</Typography>
                </div>
              </div>
            </div>}
            <div>
              <Typography color="textSecondary">
              {details.description}
              </Typography>
            </div>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </div>
    );
  }
}

Event.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Event);