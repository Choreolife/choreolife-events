/* eslint-disable jsx-a11y/anchor-is-valid */

import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment'

// Import Material UI components:
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Link from 'next/link';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Radio from '@material-ui/core/Radio';
import RadioGroup from '@material-ui/core/RadioGroup';
import FormHelperText from '@material-ui/core/FormHelperText';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormControl from '@material-ui/core/FormControl';
import FormLabel from '@material-ui/core/FormLabel';
import CardHeader from '@material-ui/core/CardHeader';
import Divider from '@material-ui/core/Divider';

// Import other UI components:
import BigCalendar from 'react-big-calendar';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import '../styles/new-event-page.css';

// Example events for now.
const events = [
  {
    id: 1,
    title: 'Right Now',
    start: new Date(new Date().setHours(new Date().getHours() - 0)),
    end: new Date(new Date().setHours(new Date().getHours() + 1)),
  },
  {
    id: 2,
    title: '3 Hours From Now',
    start: new Date(new Date().setHours(new Date().getHours() + 3)),
    end: new Date(new Date().setHours(new Date().getHours() + 4)),
  },
  {
    id: 3,
    title: '3 Days From Now',
    start: new Date(new Date().setHours(new Date().getHours() + 24*3)),
    end: new Date(new Date().setHours(new Date().getHours() + 24*3+1)),
  },
]

// `react-big-calendar` can use Moment.js or Globalize.js for interlization and localization of date/time.
// Here we tell it to use Moment.
const localizer = BigCalendar.momentLocalizer(moment)

const styles = theme => ({
  root: {
    flexGrow: 1,
    margin: theme.spacing.unit * 4,
  },
  headline: {
  	fontSize: '15pt',
    color: '#888888',
    textAlign: 'center',
  	fontWeight: 400,
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 3,
    textTransform: 'uppercase',
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    '&:before': {
      content: '""',
      borderTop: '1px solid #888888',
      margin: '0 20px 0 0',
      flex: '1 0 20px',
    },
    '&:after': {
      content: '""',
      borderTop: '1px solid #888888',
      margin: '0 0 0 20px',
      flex: '1 0 20px',
    },
  },
  button: {
    margin: theme.spacing.unit * 3,
    marginLeft: 0,
  },  
  card: {
    marginBottom: theme.spacing.unit * 3,
  },
  cardHeader: {
    borderBottom: '1px solid #eeeeee',
    backgroundColor: '#fcfcfc',
    fontSize: '15pt',
  },
  calendarContainer: {
    height: '500px',
  },
  cardContent: {
  },
  radio: {
    padding: '6px',
    paddingLeft: '12px',
  }
});

class NewEventPage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: '',
      location: '',
      description: '',
      shareWith: 'private',
      showCalendar: false,
    };
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleLocationChange = this.handleLocationChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleShareWithChange = this.handleShareWithChange.bind(this);
  }

  componentDidMount() {
    this.setState({
      showCalendar: true,
    })
  }

  handleNameChange(event) {
    this.setState({
      name: event.target.value,
    })
  }

  handleLocationChange(event) {
    this.setState({
      location: event.target.value,
    })
  }

  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value,
    })
  }

  handleShareWithChange(event) {
    this.setState({
      shareWith: event.target.value,
    })
  }

  render() {

    const { classes } = this.props;
    const { name, location, description, shareWith, showCalendar } = this.state;

    console.log(name);

    return (
      <React.Fragment>
      <Typography variant="h1" gutterBottom className={classes.headline}>
        New Event
      </Typography>
      <div className={classes.root}>
        <form className={classes.container} noValidate autoComplete="off">
          <Grid container spacing={24}>
            <Grid item xs={3}>
              <Card className={classes.card}>
                <CardHeader title="Details" className={classes.cardHeader} />
                <CardContent className={classes.cardContent}>
                  <TextField
                    id="event-name"
                    label="Name"
                    className={classes.textField}
                    value={name}
                    onChange={this.handleNameChange}
                    margin="normal"
                    fullWidth
                  />              
                  <TextField
                    id="event-location"
                    label="Location"
                    className={classes.textField}
                    value={location}
                    onChange={this.handleLocationChange}
                    margin="normal"
                    fullWidth
                  />              
                  <TextField
                    id="event-description"
                    label="Description"
                    className={classes.textField}
                    value={description}
                    onChange={this.handleDescriptionChange}
                    margin="normal"
                    fullWidth
                    multiline
                    rows="4"
                  />  
                </CardContent>
              </Card>        
              <Card className={classes.card}>
                <CardHeader title="Share With" className={classes.cardHeader} />
                <CardContent>
                  <FormControl component="fieldset" className={classes.formControl}>
                    <RadioGroup
                      aria-label="Share With"
                      name="event-share-with"
                      className={classes.group}
                      value={shareWith}
                      onChange={this.handleShareWithChange}
                    >
                      <FormControlLabel value="private" control={<Radio className={classes.radio} />} label="No one" />
                      <FormControlLabel value="whitelist" control={<Radio className={classes.radio} />} label="Certain Friends" />
                      <FormControlLabel value="blacklist" control={<Radio className={classes.radio} />} label="All My Friends" />
                      <FormControlLabel value="network" control={<Radio className={classes.radio} />} label="Friends of Friends" />
                      <FormControlLabel value="public" control={<Radio className={classes.radio} />} label="The Whole World" />
                    </RadioGroup>
                  </FormControl>
                </CardContent>
              </Card>        
            </Grid>
            <Grid item xs={9}>
              <Card className={classes.card}>
                <CardHeader title="Your Calendar(s)" className={classes.cardHeader} />
                <CardContent>
                  <div className={classes.calendarContainer} style={{display: showCalendar ? 'block' : 'none'}}>
                    <BigCalendar 
                      localizer={localizer} 
                      events={events} 
                    />            
                  </div>
                </CardContent>
              </Card>        
            </Grid>
          </Grid>
        </form>
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
      </React.Fragment>
    );
  }
}

NewEventPage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(NewEventPage);