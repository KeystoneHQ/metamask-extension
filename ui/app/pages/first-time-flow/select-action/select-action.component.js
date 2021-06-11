import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import Button from '../../../components/ui/button'
import MetaFoxLogo from '../../../components/ui/metafox-logo'

export default class SelectAction extends PureComponent {
  static propTypes = {
    history: PropTypes.object,
    isInitialized: PropTypes.bool,
    setFirstTimeFlowType: PropTypes.func,
    nextRoute: PropTypes.string,
  }

  static contextTypes = {
    t: PropTypes.func,
  }

  componentDidMount() {
    const { history, isInitialized, nextRoute } = this.props

    if (isInitialized) {
      history.push(nextRoute)
    }
  }

  handleCreate = () => {
    this.props.setFirstTimeFlowType('create')
  }

  handleImport = () => {
    this.props.setFirstTimeFlowType('import')
  }

  handleImportCoboVault = () => {
    this.props.setFirstTimeFlowType('import-keystone')
  }

  render() {
    const { t } = this.context

    return (
      <div className="select-action">
        <MetaFoxLogo />

        <div className="select-action__wrapper">
          <div className="select-action__body">
            <div className="select-action__body-header">
              {t('newToMetaMask')}
            </div>
            <div className="select-action__select-buttons">
              <div className="select-action__select-button">
                <div className="select-action__button-content">
                  <div className="select-action__button-symbol">
                    <img src="/images/download-alt.svg" alt="" />
                  </div>
                  <div className="select-action__button-text-small">
                    import Cobo Vault
                  </div>
                </div>
                <Button
                  type="primary"
                  className="first-time-flow__button"
                  onClick={this.handleImportCoboVault}
                >
                  import Cobo Vault
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
