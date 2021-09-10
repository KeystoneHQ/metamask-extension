import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as actions from '../../store/actions';

class QRHardwareStateWather extends Component {
  static propTypes = {
    qrHardware: PropTypes.object.isRequired,
    showQRHardwareWalletImporter: PropTypes.func.isRequired,
    showQRHardwareSignRequest: PropTypes.func.isRequired,
  };
  componentDidUpdate(prevProps) {
    const {
      qrHardware,
      showQRHardwareWalletImporter,
      showQRHardwareSignRequest,
    } = this.props;
    const { sync, sign } = qrHardware;
    if (!!sync.reading) {
      showQRHardwareWalletImporter();
    }
    if (!!sign.request) {
      showQRHardwareSignRequest(sign.request);
    }
  }
  render() {
    return null;
  }
}

const mapStateToProps = (state) => {
  return {
    qrHardware: state.metamask.qrHardware,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showQRHardwareWalletImporter: () => {
      dispatch(actions.showQRHardwareWalletImporter());
    },
    showQRHardwareSignRequest: (request) => {
      dispatch(actions.showQRHardwareSignRequest(request));
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(QRHardwareStateWather);
