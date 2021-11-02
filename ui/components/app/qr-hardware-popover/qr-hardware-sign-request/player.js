import React, { useEffect, useMemo, useState } from 'react';
import QRCode from 'qrcode.react';
import { UR, UREncoder } from '@ngraveio/bc-ur';
import PropTypes from 'prop-types';
import Typography from '../../../ui/typography';
import Box from '../../../ui/box';
import { useI18nContext } from '../../../../hooks/useI18nContext';
import {
  ALIGN_ITEMS,
  DISPLAY,
  FLEX_DIRECTION,
  TEXT_ALIGN,
} from '../../../../helpers/constants/design-system';
import { PageContainerFooter } from '../../../ui/page-container';

const Player = ({ type, cbor, cancelQRHardwareSignRequest, toRead }) => {
  const t = useI18nContext();
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
    <Box>
      <Box>
        <Typography align={TEXT_ALIGN.CENTER}>
          {t('QRHardwareSignRequestSubtitle')}
        </Typography>
      </Box>
      <Box
        display={DISPLAY.FLEX}
        alignItems={ALIGN_ITEMS.CENTER}
        flexDirection={FLEX_DIRECTION.COLUMN}
      >
        <QRCode value={currentQRCode.toUpperCase()} size={250} />
      </Box>
      <Box>
        <Typography align={TEXT_ALIGN.CENTER}>
          {t('QRHardwareSignRequestDescription')}
        </Typography>
      </Box>
      <PageContainerFooter
        onCancel={cancelQRHardwareSignRequest}
        onSubmit={toRead}
        cancelText={t('QRHardwareSignRequestCancel')}
        submitText={t('QRHardwareSignRequestGetSignature')}
        submitButtonType="confirm"
      />
    </Box>
  );
};

Player.propTypes = {
  type: PropTypes.string.isRequired,
  cbor: PropTypes.string.isRequired,
  cancelQRHardwareSignRequest: PropTypes.func.isRequired,
  toRead: PropTypes.func.isRequired,
};

export default Player;
