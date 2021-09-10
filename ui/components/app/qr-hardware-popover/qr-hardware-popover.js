import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCurrentQRHardwareState } from '../../../selectors';
import Popover from '../../ui/popover';
import { useI18nContext } from '../../../hooks/useI18nContext';
import {
  cancelReadQRHardwareCryptoHDKey as cancelReadQRHardwareCryptoHDKeyAction,
  cancelQRHardwareSignRequest as cancelQRHardwareSignRequestAction,
} from '../../../store/actions';
import QRHardwareWalletImporter from './qr-hardware-wallet-importer';
import QRHardwareSignRequest from './qr-hardware-sign-request';

const QRHardwarePopover = () => {
  const t = useI18nContext();
  const dispatch = useDispatch();
  const walletImporterCancel = useCallback(
    () => dispatch(cancelReadQRHardwareCryptoHDKeyAction()),
    [dispatch],
  );

  const signRequestCancel = useCallback(
    () => dispatch(cancelQRHardwareSignRequestAction()),
    [dispatch],
  );

  const [showWalletImporter, setShowWalletImporter] = useState(false);
  const [showSignRequest, setShowSignRequest] = useState(false);
  const showPopover = useMemo(() => showWalletImporter || showSignRequest, [
    showSignRequest,
    showWalletImporter,
  ]);

  const qrHardware = useSelector(getCurrentQRHardwareState);
  const { sync, sign } = qrHardware;

  useEffect(() => {
    setShowWalletImporter(sync.reading);
  }, [sync.reading]);

  useEffect(() => {
    setShowSignRequest(Boolean(sign.request));
  }, [sign.request]);

  const title = useMemo(() => {
    let _title = '';
    if (showSignRequest) {
      _title = t('QRHardwareSignRequestTitle');
    } else if (showWalletImporter) {
      _title = t('QRHardwareWalletImporterTitle');
    }
    return _title;
  }, [showSignRequest, showWalletImporter, t]);

  return showPopover ? (
    <Popover
      title={title}
      onClose={showWalletImporter ? walletImporterCancel : signRequestCancel}
    >
      {showWalletImporter && (
        <QRHardwareWalletImporter handleCancel={walletImporterCancel} />
      )}
      {showSignRequest && (
        <QRHardwareSignRequest
          handleCancel={walletImporterCancel}
          request={sign.request}
        />
      )}
    </Popover>
  ) : null;
};

export default QRHardwarePopover;
