import { drizzleConnect } from 'drizzle-react';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Card, Typography } from 'antd';

const { Text, Paragraph } = Typography;

class Collectible extends Component {
  constructor(props, context) {
    super(props);

    this.contracts = context.drizzle.contracts;
    this.dataKey = this.contracts.Collectibles.methods.tokenURI.cacheCall(this.props.tokenId);
  }

  render() {
    const contract = this.props.contracts.Collectibles;
    if (!contract.initialized) {
      return (
        <em>"Initializing..."</em>
      );
    } else if (!(this.dataKey in contract.tokenURI)) {
      return (
        <em>"Fetching..."</em>
      );
    }

    // Show a loading spinner for future updates.
    const pendingSpinner = contract.synced ? '' : ' 🔄';
    const uri = contract.tokenURI[this.dataKey].value;

    return (
        <Card className="collectible" hoverable cover={<img alt='' src={`https://robohash.org/${this.props.tokenId}?set=set4`} />}>
          <Typography>
            <Paragraph>
              <Text strong>
                #{this.props.tokenId}
              </Text>
            </Paragraph>
            <Paragraph>
              {uri} {pendingSpinner}
            </Paragraph>            
          </Typography>
        </Card>
    );
  }
}

Collectible.contextTypes = {
  drizzle: PropTypes.object,
};
Collectible.propTypes = {
  tokenId: PropTypes.string,
  contracts: PropTypes.object, // eslint-disable-line
};
Collectible.defaultProps = {
  tokenId: null,
};

const mapStateToProps = state => ({
  accounts: state.accounts,
  contracts: state.contracts,
});
export default drizzleConnect(Collectible, mapStateToProps);
