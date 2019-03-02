import React, { Component } from 'react';
import { connect } from 'react-redux';

import { authUser, logout } from '../store/actions';

import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

const styles = {
  container: {
    width: '80%',
    margin: '0 auto',
  },
  form: {
    width: '500px',
    margin: '0 auto',
    marginTop: '150px',
    display: 'flex',
    padding: '50px'
  },
  textfield: {
    margin: '15px',
    minWidth: '400px',
  },
  blank: {
    flex: 1
  },
  button: {
    width: '100%',
    margin: '0 auto',
    marginTop: '50px',
    background: '#2EA9DF',
    color: 'white',
    minHeight: '60px',
    fontSize: '20px'
  },
  input: {
    color: 'white',
  },
  cssLabel: {
    fontSize: '25px',
    '&$cssFocused': {
      color: '#2EA9DF',
    },
  },
  cssFocused: {},
  cssUnderline: {
    '&:after': {
      borderBottomColor: '#2EA9DF',
    },
  },
  cssOutlinedInput: {
    minHeight: '70px',
    '&$cssFocused $notchedOutline': {
      borderColor: '#2EA9DF',
    },
  },
  notchedOutline: {},
}

class Auth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
      isAdmin: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange = name => event => {
    this.setState({ [name]: event.target.value });
  };

  handleSubmit(e) {
    const { username, password } = this.state;
    const { authType } = this.props;
    e.preventDefault();
    this.props.authUser(authType || 'login', { username, password });
  }

  render() {
    const { username, password } = this.state;
    const { classes, authType } = this.props;

    return (
      <div className={classes.container}>
        <Paper className={classes.form} elevation={1}>
          <div className={classes.blank} />
          <div>
            <TextField
              onChange={this.handleChange('username')}
              value={username}
              className={classes.textfield}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
              label="username"
              variant="outlined"
            />
            <br />
            <TextField
              onChange={this.handleChange('password')}
              value={password}
              className={classes.textfield}
              InputLabelProps={{
                classes: {
                  root: classes.cssLabel,
                  focused: classes.cssFocused,
                },
              }}
              InputProps={{
                classes: {
                  root: classes.cssOutlinedInput,
                  focused: classes.cssFocused,
                  notchedOutline: classes.notchedOutline,
                },
              }}
              label="password"
              type="password"
              variant="outlined"
            />
            <br />
            <Button variant="contained" className={classes.button} onClick={this.handleSubmit}>
              {authType === 'login' ? 'login' : 'register'}
            </Button>
          </div>
          <div className={classes.blank} />
        </Paper>
      </div>
    );
  }
}

export default connect(() => ({}), { authUser, logout })(withStyles(styles)(Auth));