import { combineReducers } from "redux";
import MosaicReducer from "./MosaicDataStorage/MosaicDataStorage.reducers";

export default combineReducers({
  mosaic: MosaicReducer,
});