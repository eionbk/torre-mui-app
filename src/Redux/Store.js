import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import {torreReducer} from './Reducer';

export const store = createStore(torreReducer, composeWithDevTools(applyMiddleware(thunk)));