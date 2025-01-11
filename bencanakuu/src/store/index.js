import { configureStore } from "@reduxjs/toolkit";
import { loginReducer, registerReducer } from "./auth";

import {
  deleteInformationReducer,
  getInformationReducer,
  postInformationReducer,
  patchInformationReducer,
  getInformationByIdReducer,
} from "./information";

export const store = configureStore({
  reducer: {
    // auth
    userLogin: loginReducer,
    userRegister: registerReducer,

    // information
    deleteInformation: deleteInformationReducer,
    getInformation: getInformationReducer,
    getInformationById: getInformationByIdReducer,
    postInformation: postInformationReducer,
    patchInformation: patchInformationReducer,
  },
});
