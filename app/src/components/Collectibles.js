import { drizzleConnect } from 'drizzle-react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Collectible } from '../components';

class Collectibles extends Component {
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
        <Collectible key={tokenId} tokenId={tokenId} hideOwner />
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

Collectibles.contextTypes = {
  drizzle: PropTypes.object,
};
Collectibles.propTypes = {
  account: PropTypes.string,
  contracts: PropTypes.object, // eslint-disable-line
};
Collectibles.defaultProps = {
  account: null,
};

const mapStateToProps = state => ({
  contracts: state.contracts,
});
export default drizzleConnect(Collectibles, mapStateToProps);
