import { drizzleConnect } from 'drizzle-react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Collectible } from '../components';

class CollectiblesWallet extends Component {
  constructor(props, context) {
    super(props);

    this.contracts = context.drizzle.contracts;
    this.tokensOfOwner = this.contracts.Collectibles.methods.tokensOfOwner.cacheCall(this.props.account);
  }

  render() {
    const contract = this.props.contracts.Collectibles;
    if (!contract.initialized) {
      return (
        <em>"Initializing..."</em>
      );
    } else if (!(this.tokensOfOwner in contract.tokensOfOwner)) {
      return (
        <em>"Fetching..."</em>
      );
    }

    const tokensOfOwner = contract.tokensOfOwner[this.tokensOfOwner].value;
    const collectibles = tokensOfOwner.map(tokenId => {
      return (
        <Collectible tokenId={tokenId} hideOwner />
      )
    });
    const hasNoCollectibles = (tokensOfOwner.length <= 0);

    return (
      <section>
        {hasNoCollectibles ? "You own no collectibles" : collectibles}
      </section>
    );
  }
}

CollectiblesWallet.contextTypes = {
  drizzle: PropTypes.object,
};
CollectiblesWallet.propTypes = {
  account: PropTypes.string,
  contracts: PropTypes.object, // eslint-disable-line
};
CollectiblesWallet.defaultProps = {
  account: null,
};

const mapStateToProps = state => ({
  contracts: state.contracts,
});
export default drizzleConnect(CollectiblesWallet, mapStateToProps);
