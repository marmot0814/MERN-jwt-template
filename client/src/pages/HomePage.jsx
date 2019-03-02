import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

class HomePage extends React.Component {
  render() {
    if (!this.props.isAuthenticated)
      return <Redirect to="/login" />;

    return (
      <div>This is a HomePage</div>
    );
  }
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = ({

})

export default connect(mapStateToProps, mapDispatchToProps)(HomePage)