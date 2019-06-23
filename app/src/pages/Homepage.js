import React from "react";
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { drizzleConnect } from 'drizzle-react'
import { 
  ContractData,
  ContractForm,
  Collectibles 
} from '../components';

const Homepage = ({ accounts }) => (
  <div className="App">
    <ToastContainer />
    <div>
      <h1><ContractData contract="Collectibles" method="name" /> Minter</h1>
      <p>Hello, {accounts[0]}</p>
    </div>

    <div className="section">
      <h2>Mint and view your Collectibles</h2>
      <ContractForm contract="Collectibles" method="mintWithTokenURI" defaults={{to: "", tokenId: "", tokenURI: ""}} />
      <Collectibles account={accounts[0]} />
    </div>
  </div>
);

const mapStateToProps = state => ({
  accounts: state.accounts,
  SimpleStorage: state.contracts.SimpleStorage,
  TutorialToken: state.contracts.TutorialToken,
  drizzleStatus: state.drizzleStatus
})

export default drizzleConnect(Homepage, mapStateToProps)


