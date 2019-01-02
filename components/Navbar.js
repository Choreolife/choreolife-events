import React, {Component} from 'react';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Link from 'next/link';
import { withStyles } from '@material-ui/styles';
import Home from '@material-ui/icons/Home';

const styles = {
  links: {
    display: 'flex',
    width: '100%',
    justifyContent: 'flex-start'
  },
  link: {
    marginRight: 50
  },
  appBarContainer: {
    justifyContent: 'space-between'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class Navbar extends Component {

  render() {
    const { account, classes } = this.props;
    const open = Boolean();
    
    return (
      <div>
        <AppBar position="static">
          <Toolbar className={classes.appBarContainer}>
            <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
              <MenuIcon />
            </IconButton>
            <div className={classes.links}>
              <div className={classes.link}>
                <Link href={{pathname: '/'}}>
                  <Typography variant="h6" color="inherit" className={classes.link}>Choreolife</Typography>
                </Link>
              </div>
              <div className={classes.link}>
                <Link href={{pathname: '/about'}}>
                  <Typography variant="h6" color="inherit" className={classes.link}>About</Typography>
                </Link>
              </div>
            </div>
            {account && (
              <div>
                <IconButton
                  aria-owns={open ? 'menu-appbar' : undefined}
                  aria-haspopup="true"
                  onClick={this.handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
              </div>
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

export default withStyles(styles)(Navbar)