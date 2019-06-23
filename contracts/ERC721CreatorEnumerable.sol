pragma solidity 0.5.8;

import "openzeppelin-solidity/contracts/token/ERC721/ERC721Enumerable.sol";

contract ERC721CreatorEnumerable is ERC721Enumerable {
  // Mapping from creator to list of token IDs
  mapping(address => uint[]) private _createdTokens;

  // Who receives taxes from taxes
  mapping(uint => address) private _tokenCreator;

  /**
  * @dev Throws if called by any account other than the creator of a tokenId.
  */
  modifier onlyCreatorOf(uint tokenId) {
      require(exists(tokenId), "Token doesn't exist.");
      require(creatorOf(tokenId) == msg.sender, "Caller is not the token creator");
      _;
  }

  function exists(uint tokenId) public view returns (bool) {
    return _exists(tokenId);
  }

  /**
  * @dev Gets the creator of the specified token ID.
  * @param tokenId uint ID of the token to query the creator of
  * @return address currently marked as the creator of the given token ID
  */
  function creatorOf(uint tokenId) public view returns (address) {
    address creator = _tokenCreator[tokenId];
    require(creator != address(0), "ERC721: creator query for nonexistent token");

    return creator;
  }

  function tokensOfCreator(address creator) public view returns (uint[] memory) {
    return _tokensOfCreator(creator);
  }

  function tokensOfOwner(address owner) public view returns (uint[] memory) {
    return _tokensOfOwner(owner);
  }

  /**
  * @dev Gets the list of token IDs of the requested creator.
  * @param creator address who created the tokens
  * @return uint[] List of token IDs owned by the requested address
  */
  function _tokensOfCreator(address creator) internal view returns (uint[] storage) {
    return _createdTokens[creator];
  }

  // function _mint(address account, uint256 value) internal {
  //   address creator = msg.sender; // Track a Creator's tokens
  //   _createdTokens[creator].push(value);
  //   _tokenCreator[value] = creator;

  //   super._mint(account, value);
  // }
}