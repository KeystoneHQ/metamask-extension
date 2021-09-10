import { connect } from 'react-redux';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';
import {
  cancelReadQRHardwareCryptoHDKey,
  submitQRHardwareCryptoHDKey,
  hideModal,
} from '../../../../store/actions';
import QRHardwareWalletImporter from './qr-hardware-wallet-importer.component';

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => {
      dispatch(hideModal());
    },
    submitQRHardwareCryptoHDKey: (cbor) => submitQRHardwareCryptoHDKey(cbor),
    cancelReadQRHardwareCryptoHDKey: () => dispatch(cancelReadQRHardwareCryptoHDKey()),
  };
};

export default compose(
  withRouter,
  connect(null, mapDispatchToProps),
)(QRHardwareWalletImporter);
