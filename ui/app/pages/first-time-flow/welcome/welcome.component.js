import EventEmitter from 'events'
import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Mascot from '../../../components/ui/mascot'
import Button from '../../../components/ui/button'
import { INITIALIZE_CREATE_NEW_VAULT_ROUTE } from '../../../helpers/constants/routes'

export default class Welcome extends PureComponent {
  static propTypes = {
    history: PropTypes.object,
    welcomeScreenSeen: PropTypes.bool,
  }

  static contextTypes = {
    t: PropTypes.func,
  }

  constructor(props) {
    super(props)

    this.animationEventEmitter = new EventEmitter()
  }

  componentDidMount() {
    const { history, welcomeScreenSeen } = this.props
    if (welcomeScreenSeen) {
      history.push(INITIALIZE_CREATE_NEW_VAULT_ROUTE)
    }
  }

  handleContinue = () => {
    this.props.history.push(INITIALIZE_CREATE_NEW_VAULT_ROUTE)
  }

  render() {
    const { t } = this.context

    return (
      <div className="welcome-page__wrapper">
        <div className="welcome-page">
          <Mascot
            animationEventEmitter={this.animationEventEmitter}
            width="125"
            height="125"
          />
          <div className="welcome-page__header">{t('welcomeCobo')}</div>
          <div className="welcome-page__description">
            <img
              className="page-container__warning-icon"
              src="images/warning.svg"
              alt=""
            />
            <div>{t('metamaskDescriptionCobo')}</div>
          </div>
          <Button
            type="primary"
            className="first-time-flow__button"
            onClick={this.handleContinue}
          >
            {t('getStarted')}
          </Button>
        </div>
      </div>
    )
  }
}
