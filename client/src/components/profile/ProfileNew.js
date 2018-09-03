import React, { Component } from 'react';
import ProfileEdit from './ProfileEdit';
import { reduxForm } from 'redux-form';
import ProfileEditReview from './ProfileEditReview';

class ProfileNew extends Component {
  state = { showEditReview: false };
  renderContent() {
    if (this.state.showEditReview) {
      return (
        <ProfileEditReview
          onCancel={() => this.setState({ showEditReview: false })}
        />
      );
    }
    return (
      <ProfileEdit
        onProfileSubmit={() => this.setState({ showEditReview: true })}
      />
    );
  }
  render() {
    return <div>{this.renderContent()}</div>;
  }
}

export default reduxForm({
  form: 'profileForm'
})(ProfileNew);
