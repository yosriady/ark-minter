pragma solidity 0.5.8;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "openzeppelin-solidity/contracts/token/ERC721/ERC721MetadataMintable.sol";

contract Collectibles is ERC721Full {
  constructor () public ERC721Full("ARK Collectibles", "ARK") {}

  /**
    * @dev Function to mint tokens.
    * @param to The address that will receive the minted tokens.
    * @param tokenId The token id to mint.
    * @param tokenURI The token URI of the minted token.
    * @return A boolean that indicates if the operation was successful.
    */
  function mint(address to, uint256 tokenId, string memory tokenURI) public returns (bool) {
      _mint(to, tokenId);
      _setTokenURI(tokenId, tokenURI);
      return true;
  }
}