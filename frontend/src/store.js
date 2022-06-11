import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import {
  phoneReducer,
  phoneDetailReducer,
  createPhoneReducer,
  deleteUpdatePhoneReducer,
  comparePhoneReducer,
} from "./redux/reducers/phoneReducer";
import {
  userReducer,
  authReducer,
  profileReducer,
  allUsersReducer,
  singleUserReducer,
  updateDeleteUserReducer,
} from "./redux/reducers/userReducer";

const reducer = combineReducers({
  phones: phoneReducer,
  phoneDetails: phoneDetailReducer,
  user: userReducer,
  auth: authReducer,
  profile: profileReducer,
  newPhone: createPhoneReducer,
  deleteUpdate: deleteUpdatePhoneReducer,
  allUsers: allUsersReducer,
  singleUser: singleUserReducer,
  updateDeleteUser: updateDeleteUserReducer,
  comparePhone: comparePhoneReducer,
});

let initialState = {};

const middleware = [thunk];

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
