import { MosaicActionTypes } from "./MosaicDataStorage.types"

export const toggleReadMe = () => ({
  type: MosaicActionTypes.TOGGLE_READ_ME
})

export const setStudentsData = (data) => ({
  type: MosaicActionTypes.SET_STUDENTS_DATA ,
  payload: data
})