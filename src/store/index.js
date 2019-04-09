import { createStore } from 'redux'; //import redux store
// import reducer 
import reducer from '../reducers';

//initialState i.e initial deposit 
const initialState = {tech: "React"};
//create the new store (bank vault)
export const store = createStore(reducer, initialState); //incomplete for now
