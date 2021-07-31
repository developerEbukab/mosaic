import { MosaicActionTypes } from "./MosaicDataStorage.types"

const INITIAL_STATE = {
  studentsData: [],
  showReadMe: false
}

const MosaicReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case MosaicActionTypes.TOGGLE_READ_ME:
      return {
        ...state,
        showReadMe: !state.showReadMe
      }
    case MosaicActionTypes.SET_STUDENTS_DATA:
      return {
        ...state,
        studentsData: action.payload
      }
    default:
      return state;
  }
}

export default MosaicReducer;