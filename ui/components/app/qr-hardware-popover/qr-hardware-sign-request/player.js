import React, { useEffect, useMemo, useState } from 'react';
import QRCode from 'qrcode.react';
import { UR, UREncoder } from '@ngraveio/bc-ur';
import PropTypes from 'prop-types';
import Button from '../../../ui/button';

const Player = ({ type, cbor, cancelQRHardwareSignRequest, toRead }) => {
  const urEncoder = useMemo(
    () => new UREncoder(new UR(Buffer.from(cbor, 'hex'), type), 400),
    [cbor, type],
  );
  const [currentQRCode, setCurrentQRCode] = useState(urEncoder.nextPart());
  useEffect(() => {
    const id = setInterval(() => {
      setCurrentQRCode(urEncoder.nextPart());
    }, 100);
    return () => {
      clearInterval(id);
    };
  }, [urEncoder]);

  return (
    <div className="qr-scanner">
      <div className="qr-scanner__title">
        <p>Scan QR Hardware Title</p>
      </div>
      <div
        className="qr-scanner__content"
        style={{
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          marginBottom: 20,
        }}
      >
        <QRCode value={currentQRCode.toUpperCase()} size={250} />
      </div>
      <div style={{ paddingLeft: 20, paddingRight: 20, paddingBottom: 20 }}>
        Scan QR Hardware Description
      </div>
      <div className="qr-hardware-transaction-display__button-group">
        <Button
          className="qr-hardware-transaction-display__button"
          type="default"
          onClick={() => {
            cancelQRHardwareSignRequest();
          }}
        >
          Cancel Transaction
        </Button>
        <Button
          className="qr-hardware-transaction-display__button"
          type="primary"
          onClick={toRead}
        >
          Get Signature
        </Button>
      </div>
    </div>
  );
};

Player.propTypes = {
  type: PropTypes.string.isRequired,
  cbor: PropTypes.string.isRequired,
  cancelQRHardwareSignRequest: PropTypes.func.isRequired,
  toRead: PropTypes.func.isRequired,
};

export default Player;
