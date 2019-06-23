const Collectibles = artifacts.require("Collectibles");

module.exports = function(deployer) {
  deployer.deploy(Collectibles);
};
