import React, {Component} from 'react';

import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment';

export default class Event extends Component {

  render() {
    const { account, classes } = this.props;
    const growable = {
      flexGrow: 1
    };

    return (
      <div>
        <Card className={classes.card}>
          <CardContent>
            <div style={growable}>
              <Typography color="textSecondary" gutterTop>
                <Moment format="Mmm DD YYY">
                    1976-04-19
                </Moment>
              </Typography>
              <Typography color="textSecondary" gutterTop>
                    2:00 PM
              </Typography>
            </div>
            <div>
              <Typography color="textSecondary">
                Innovation Office Hours
              </Typography>
            </div>
            <div>
              <Typography color="textSecondary">
                1408 Q St NW Washington, DC 20001
              </Typography>
            </div>
            <div>
              <Typography color="textSecondary">
                This is a description, a really long thing that nobody ever reads and just takes up space so we can know what it looks like when text overflows, etc.
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

