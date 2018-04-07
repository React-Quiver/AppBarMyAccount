import React, { Component, PropTypes } from 'react';
import { browserHistory } from 'react-router';

// material-ui
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';
import FlatButton from 'material-ui/FlatButton';

// styles
import styles from './styles';

export default class AppBarMyAccount extends Component {
  static propTypes = {
    user: PropTypes.object,
    settingsUrl: PropTypes.string,
    signOutUrl: PropTypes.string,
  };

  static contextTypes = {
    muiTheme: PropTypes.object.isRequired,
  };

  state = {
    isOpen: false,
  }

  openMyAccount() {
    this.setState({ isOpen: true });
  }

  closeMyAccount() {
    this.setState({ isOpen: false });
  }

  isEmpty(obj) {
    if (obj === undefined) return true;
    if (obj === null) return true;
    if (obj.length > 0) return false;
    if (obj.length === 0) return true;
    if (typeof obj !== 'object') return true;
    for (const key in obj) {
      if (hasOwnProperty.call(obj, key)) return false;
    }

    return true;
  }

  render() {
    const { isOpen } = this.state;
    const { user } = this.props;
    const { muiTheme } = this.context;

    let palette = undefined;

    if (muiTheme) {
      palette = muiTheme.rawTheme.palette;
    }

    if (this.isEmpty(user)) {
      return (<div></div>);
    }

    return (
      <MuiThemeProvider muiTheme={this.context.muiTheme}>
        <div
          tabIndex={2}
          onBlur={::this.closeMyAccount}
          style={{ margin: 10 }}
        >
          <div>
            <Avatar
              style={{ cursor: 'pointer' }}
              size={30}
              onClick = {() => {
                this.openMyAccount();
              }}
            >
                {user.firstName ? user.firstName[0] : null}
              </Avatar>
            {
              isOpen ?
              <Paper
                style = {styles.container}
              >
              <div
                style = {styles.subContainer}
              >
                <div
                  style = {styles.avatarContainer}
                >
                  <Avatar
                    size={70}
                  >
                    O
                  </Avatar>
                </div>
                <div
                  style = {styles.infoContainer}
                >
                  <b>{user.firstName} {user.lastName}</b><br />
                  <span style={styles.email}>{user.email}</span><br /><br />
                  <FlatButton
                    label="My Account"
                    backgroundColor={palette.accent1Color || '#2196f3'}
                    hoverColor={palette.accent3Color || '#1976d2'}
                    style={{ color: 'white' }}
                    onMouseDown = {() => {
                      browserHistory.push(this.props.settingsUrl);
                    }
                  }
                  />
                </div>
              </div>
              <div
                style = {styles.signoutContainer}
              >
                <FlatButton
                  label="Sign Out"
                  backgroundColor={'white'}
                  hoverColor={'#e0e0e0'}
                  onMouseDown = {() => {
                    browserHistory.push(this.props.signOutUrl);
                  }
                }
                />
                </div>
              </Paper>
              : null
            }
          </div>
        </div>
      </MuiThemeProvider>
    );
  }
}
