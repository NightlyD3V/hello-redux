import React, { Component } from "react";
import HelloWorld from "./HelloWorld";
import { createStore } from 'redux'; //import redux store
// import reducer 
import reducer from './reducers';

//initialState i.e initial deposit 
const initialState = {tech: "React"};
//create the new store (bank vault)
const store = createStore(reducer, initialState); //incomplete for now

class App extends Component {
  // state object removed.
  render() {
    return <HelloWorld tech={store.getState().tech} />;
  }
}

export default App;
