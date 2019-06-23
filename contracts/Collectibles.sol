pragma solidity 0.5.8;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Full.sol";
// import "./ERC721CreatorEnumerable.sol";

contract Collectibles is ERC721Full {
  // event Minted(address indexed to, address indexed from, uint indexed tokenId);

  constructor () public ERC721Full("ARK Collectibles", "ARK") {
    // TODO: Other data e.g. editions
  }
}