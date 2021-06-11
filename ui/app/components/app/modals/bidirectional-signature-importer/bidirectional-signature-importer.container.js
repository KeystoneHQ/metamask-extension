import { connect } from 'react-redux'
import {
  hideModal,
  qrCodeDetected,
  submitBidirectionalSignature,
  cancelBidirectionalTransaction,
} from '../../../../store/actions'
import BidirectionalSignatureImporter from './bidirectional-signature-importer.component'

const mapStateToProps = (state) => {
  return {
    signPayload: state.metamask.signPayload,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    hideModal: () => dispatch(hideModal()),
    qrCodeDetected: (data) => dispatch(qrCodeDetected(data)),
    submitSignature: (signature) =>
      dispatch(submitBidirectionalSignature(signature)),
    cancelTransaction: () => dispatch(cancelBidirectionalTransaction()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(BidirectionalSignatureImporter)
