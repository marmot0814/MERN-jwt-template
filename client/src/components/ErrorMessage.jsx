import React from 'react';
import { connect } from 'react-redux';

import { withStyles } from '@material-ui/core/styles';
import Snackbar from '@material-ui/core/Snackbar';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';

const styles = {

}

class ErrorMessage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    }
  }

  handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    this.setState({ open: false });
  };

  componentWillReceiveProps(nextProps) {
    this.setState({
      open: !!nextProps.error.message
    })
  }

  render() {
    const { classes, error } = this.props;
    return (
      <Snackbar
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        open={this.state.open}
        autoHideDuration={6000}
        onClose={this.handleClose}
        ContentProps={{
          'aria-describedby': 'message-id',
        }}
        message={<span id="message-id">{error.message && error.message.message}</span>}
        action={[
          <IconButton
            key="close"
            aria-label="Close"
            color="inherit"
            className={classes.close}
            onClick={this.handleClose}
          >
            <CloseIcon />
          </IconButton>,
        ]}
      />
      // {error.message && <div className="error">{error.message.message}</div>}
    )
  }
}

export default connect(store => ({ error: store.error }))(withStyles(styles)(ErrorMessage));