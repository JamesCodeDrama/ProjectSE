import React, { Component } from 'react';
import { connect } from 'react-redux';
//import { Router } from 'react-router-dom';
import Link from 'react-router-dom/Link';
import Payments from './Payments';
//import StripeCheckout from 'react-stripe-checkout';

class Header extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login With Google</a>
          </li>
        );
      default:
        return [
          <li key="0">
            <a href="/profile">Profile</a>
          </li>,
          <li key="1">
            <Payments />
          </li>,
          <li key="3" style={{ margin: '0 10px' }}>
            Credits: {this.props.auth.credits}
          </li>,
          <li key="2">
            <a href="/api/logout">Logout</a>
          </li>
        ];
    }
  }

  render() {
    if (this.props.auth) console.log(this.props.auth);
    return (
      <nav>
        <div className="nav-wrapper">
          <Link
            to={this.props.auth ? '/surveys' : '/'}
            className="left brand-logo"
          >
            Fond
          </Link>
          <ul className="right">{this.renderContent()}</ul>
        </div>
      </nav>
    );
  }
}
function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(Header);
