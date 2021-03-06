import React from 'react';
import {connect} from 'react-redux';
import {signIn, signOut} from '../actions';

class GoogleAuth extends React.Component {

  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '707277215236-p95mf7bmdvbptj68dnj6tpa9thfptrdf.apps.googleusercontent.com',
        scope: 'email'
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();

        this.onAuthChange(this.auth.isSignedIn.get()); //calling onAuthChange passing a boolean parameter of signedIn
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
  }

  onAuthChange = (isSignedIn) => {
    //if true, call signIn action creator passing userId
    if(isSignedIn) {
      let userId = this.auth.currentUser.get().getId();
      let userName = this.auth.currentUser.get().getBasicProfile().getName();
      let userAvatar = this.generateAvatar(userName);
      this.props.signIn(userId, userName, userAvatar);
    } else {
      this.props.signOut();
    }
  };

  generateAvatar = (userName) => {
    let firstInitial = userName.charAt(0);
    let whiteSpaceIndex = userName.indexOf(' ')
    let secondInitial = userName.charAt(whiteSpaceIndex+1)
    return firstInitial+secondInitial;
  };

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  renderAuthButton() {
    if(this.props.isSignedIn === null) {
      return null
    } else if (this.props.isSignedIn) {
      return (
        <button onClick={this.onSignOutClick} className="ui red google button">
          <i className="google icon" />
            Sign Out
        </button>
      )
    } else {
      return (
        <button onClick={this.onSignInClick} className="ui red google button">
          <i className="google icon" />
            Sign In with Google
        </button>
      )
    }
  }

  render() {
    return <div style={{ marginTop: '5px', marginBottom: '5px'}}>
      {this.renderAuthButton()}
    </div>;
  }
}

const mapStateToProps = (state) => {
  return {isSignedIn: state.auth.isSignedIn}
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);