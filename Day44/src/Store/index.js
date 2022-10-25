import { createStore, combineReducers } from "redux"; // check configureStore

import googleReducer from "./Slices/googleReducer";
import profileReducer from "./Slices/profileReducer";

const reducers = combineReducers({
  home: googleReducer,
  profile: profileReducer,
});

const store = createStore(reducers);

export default store;
