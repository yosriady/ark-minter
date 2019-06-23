pragma solidity 0.5.8;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
import "./ERC721CreatorEnumerable.sol";

contract Collectibles is ERC721Full, ERC721CreatorEnumerable {
  event Minted(address indexed to, address indexed from, uint indexed tokenId);

  constructor () public ERC721Full("ARK Collectibles", "ARK") {
    // TODO: Other data e.g. editions
  }

  /**
    * @dev Function to mint tokens.
    * @param to The address that will receive the minted tokens.
    * @param tokenId The token id to mint.
    * @param tokenURI The token URI of the minted token.
    * @return A boolean that indicates if the operation was successful.
    */
  function mintWithTokenURI(address to, uint tokenId, string memory tokenURI) public returns (bool) {
      _mint(to, tokenId);
      _setTokenURI(tokenId, tokenURI);
      emit Minted(to, msg.sender, tokenId);
      return true;
  }
}