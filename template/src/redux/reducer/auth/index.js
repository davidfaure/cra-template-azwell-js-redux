import * as type from "../../constants/authConstant";

const initialState = {
  isLoggedIn: false,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case type.LOGIN:
      return {
        ...state,
        isLoggedIn: true,
        user: action.payload,
      };
    case type.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default authReducer;
