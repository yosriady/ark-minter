const SimpleStorage = artifacts.require("SimpleStorage");
const Collectibles = artifacts.require("Collectibles");

module.exports = function(deployer) {
  deployer.deploy(SimpleStorage);
  deployer.deploy(Collectibles);
};
