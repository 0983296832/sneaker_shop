const AuthReducer = (state, action) => {
  if (action.type === "LOG_IN") {
    return {
      ...state,
      displayName: action.payload?.displayName,
      email: action.payload?.email,
      photoURL: action.payload?.photoURL,
    };
  }
  if (action.type === "LOG_OUT") {
    return {
      ...state,
      displayName: "",
      email: "",
      photoURL: "",
    };
  }
  return state;
};

export default AuthReducer;
