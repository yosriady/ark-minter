const { assertEvent, expectThrow, timeTravel } = require('./helpers');

const Collectibles = artifacts.require("Collectibles.sol");

const TEST_TOKEN_ID = 123;
const TEST_URI = 'mock://mytoken';

contract('Collectibles', ([creator]) => {
  before(async () => {
    this.collectibles = await PatronageCollectibles.new();
  });

  it('should initialize correctly', async () => {
    const name = await this.collectibles.name();
    assert.equal(name, "ARK Collectibles");

    const symbol = await this.collectibles.symbol();
    assert.equal(symbol, "ARK");
  });
});
