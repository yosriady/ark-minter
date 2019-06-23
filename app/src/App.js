import React, { Component } from "react";
import { DrizzleProvider } from "drizzle-react";
import { LoadingContainer } from "drizzle-react-components";

import "./App.css";

import drizzleOptions from "./drizzleOptions";
import { Homepage } from "./pages";
import store from './middleware'

// TODO: react-router
class App extends Component {
  render() {
    return (
      <DrizzleProvider store={store} options={drizzleOptions}>
        <LoadingContainer>
          <Homepage />
        </LoadingContainer>
      </DrizzleProvider>
    );
  }
}

export default App;
