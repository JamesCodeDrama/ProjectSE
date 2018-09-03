import React, { Component } from 'react';
import { connect } from 'react-redux';
import Link from 'react-router-dom/Link';

class Profile extends Component {
  render() {
    return (
      <div>
        <Link to="/profile/edit" className="red btn-flat white-text">
          Edit Profile
        </Link>
        {this.props.auth && <h2>{this.props.auth.telephone}</h2>}
      </div>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Profile);
