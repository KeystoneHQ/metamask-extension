import PropTypes from 'prop-types'
import React, { Component } from 'react'
import getAccountLink from '../../../../lib/account-link'
import Button from '../../../components/ui/button'

class AccountList extends Component {
  getHdPaths() {
    return [
      {
        label: `Ledger Live`,
        value: `m/44'/60'/0'/0/0`,
      },
      {
        label: `Legacy (MEW / MyCrypto)`,
        value: `m/44'/60'/0'`,
      },
    ]
  }

  goToNextPage = () => {
    // If we have < 5 accounts, it's restricted by BIP-44
    if (this.props.accounts.length === 5) {
      this.props.getPage(this.props.externalWallet, 1)
    }
  }

  goToPreviousPage = () => {
    this.props.getPage(this.props.externalWallet, -1)
  }

  capitalizeDevice(device) {
    return device.slice(0, 1).toUpperCase() + device.slice(1)
  }

  renderHeader() {
    return (
      <div className="cobo-hw-connect">
        <h3 className="cobo-hw-connect__hdPath__title">
          {this.context.t('selectAnAccount')}
        </h3>
        <p className="cobo-hw-connect__msg">
          {this.context.t('selectAnAccountHelp')}
        </p>
      </div>
    )
  }

  renderAccounts() {
    return (
      <div className="cobo-hw-account-list">
        {this.props.accounts.map((account, idx) => (
          <div className="cobo-hw-account-list__item" key={account.address}>
            <div className="cobo-hw-account-list__item__radio">
              <input
                type="radio"
                name="selectedAccount"
                id={`address-${idx}`}
                value={account.index}
                onClick={(e) => {
                  this.props.onAccountChange(e.target.value)
                }}
                checked={
                  this.props.selectedAccount === account.index.toString()
                }
              />
              <label
                className="cobo-hw-account-list__item__label"
                htmlFor={`address-${idx}`}
              >
                <span className="cobo-hw-account-list__item__index">
                  {account.index + 1}
                </span>
                {`${account.address.slice(0, 4)}...${account.address.slice(
                  -4,
                )}`}
                <span className="cobo-hw-account-list__item__balance">{`${account.balance}`}</span>
              </label>
            </div>
            <a
              className="cobo-hw-account-list__item__link"
              href={getAccountLink(account.address, this.props.network)}
              target="_blank"
              rel="noopener noreferrer"
              title={this.context.t('etherscanView')}
            >
              <img src="images/popout.svg" alt="" />
            </a>
          </div>
        ))}
      </div>
    )
  }

  renderPagination() {
    return (
      <div className="cobo-hw-list-pagination">
        <button
          className="cobo-hw-list-pagination__button"
          onClick={this.goToPreviousPage}
        >
          {`< ${this.context.t('prev')}`}
        </button>
        <button
          className="cobo-hw-list-pagination__button"
          onClick={this.goToNextPage}
        >
          {`${this.context.t('next')} >`}
        </button>
      </div>
    )
  }

  renderButtons() {
    const disabled = this.props.selectedAccount === null
    const buttonProps = {}
    if (disabled) {
      buttonProps.disabled = true
    }

    return (
      <div className="new-external-account-form__buttons">
        <Button
          type="primary"
          large
          className="new-external-account-form__button unlock"
          disabled={disabled}
          onClick={this.props.onUnlockAccount.bind(this)}
        >
          {this.context.t('unlock')}
        </Button>
      </div>
    )
  }

  render() {
    return (
      <div className="new-external-account-form account-list">
        {this.renderHeader()}
        {this.renderAccounts()}
        {this.renderPagination()}
        {this.renderButtons()}
      </div>
    )
  }
}

AccountList.propTypes = {
  accounts: PropTypes.array.isRequired,
  onAccountChange: PropTypes.func.isRequired,
  getPage: PropTypes.func.isRequired,
  network: PropTypes.string,
  selectedAccount: PropTypes.string,
  externalWallet: PropTypes.object.isRequired,
  onUnlockAccount: PropTypes.func.isRequired,
}

AccountList.contextTypes = {
  t: PropTypes.func,
}

export default AccountList
