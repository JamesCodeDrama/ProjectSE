import React, { Component } from 'react';
import { connect } from 'react-redux';

class Landing extends Component {
  render() {
    return (
      <div style={{ textAlign: 'center' }}>
        <h1>Fond Home Care</h1>
        take care from the bottom of our hearts
      </div>
    );
  }
}

export default connect()(Landing);
