import React from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import { logout } from '../store/actions';

const styles = {
  navbar: {
    backgroundColor: '#2EA9DF'
  },
  logo: {
    color: 'white',
    marginRight: '60px'
  },
  blank: {
    flex: 1
  },
  button: {
    fontSize: '20px',
    padding: '0 5px'
  },
  buttonFocus: {
    fontSize: '20px',
    padding: '0 5px',
    color: '#dddddd',
  }
}

class Navbar extends React.Component {
  render() {
    const { classes, auth, logout } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static" className={classes.navbar}>
          <Toolbar>
            <Typography variant="h5" className={classes.logo}>
              LOGO Here
            </Typography>
            <div className={classes.blank} />
            {
              auth.isAuthenticated &&
              <Button color="inherit" className={classes.button} onClick={logout}>
                LOGOUT
              </Button>
            }
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}


const mapStateToProps = (state) => ({
  auth: state.auth,

})

const mapDispatchToProps = ({
  logout
})

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Navbar));