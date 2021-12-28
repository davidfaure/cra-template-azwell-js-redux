import * as type from "../constants/authConstant";

export const loginUser = (user) => {
  return {
    type: type.LOGIN,
    payload: user,
  };
};

export const LogoutUser = () => {
  return {
    type: type.LOGOUT,
  };
};
