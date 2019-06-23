const { assertEvent, expectThrow, timeTravel } = require('./helpers');

const Collectibles = artifacts.require("Collectibles.sol");

const ZERO_ADDRESS = '0x0000000000000000000000000000000000000000';
const TEST_TOKEN_ID = 123;
const TEST_URI = 'mock://mytoken';

contract('Collectibles', ([creator]) => {
  before(async () => {
    this.collectibles = await Collectibles.new();
  });

  it('should initialize correctly', async () => {
    const name = await this.collectibles.name();
    assert.equal(name, "ARK Collectibles");

    const symbol = await this.collectibles.symbol();
    assert.equal(symbol, "ARK");
  });

  // it.skip('Anyone should be able to mint new Collectibles', async () => {
  //   const owner = creator;
  //   const result = await this.collectibles.mintWithTokenURI(owner, TEST_TOKEN_ID, TEST_URI, { from:creator });
  //   assertEvent(result, {
  //     event: 'Transfer',
  //     args: {
  //       from: ZERO_ADDRESS,
  //       to: creator,
  //       tokenId: TEST_TOKEN_ID,
  //     },
  //   }, 'A Transfer event is emitted.', 0);

  //   // const tokenCreator = await this.collectibles.creatorOf(TEST_TOKEN_ID);
  //   // assert.equal(tokenCreator, creator);

  //   const tokenOwner = await this.collectibles.ownerOf(TEST_TOKEN_ID);
  //   assert.equal(tokenOwner, owner);

  //   const URI = await this.collectibles.tokenURI(TEST_TOKEN_ID);
  //   assert.equal(URI, TEST_URI);

  //   // const createdTokens = await this.collectibles.tokensOfCreator(creator);
  //   // assert.equal(createdTokens.length, 1);
  //   // assert.equal(createdTokens[0], TEST_TOKEN_ID);

  //   const ownedTokens = await this.collectibles.tokensOfOwner(owner);
  //   assert.equal(ownedTokens.length, 1);
  //   assert.equal(ownedTokens[0], TEST_TOKEN_ID);    
  // });  
});
