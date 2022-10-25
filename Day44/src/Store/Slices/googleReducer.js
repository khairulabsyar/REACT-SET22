const INITIAL_STATE = {
  title: "Google",
  description: "your favorite data collector",
};

const googleReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_HOME_STATE":
      return {
        ...state,
        ...payload,
      };
    case "RESET_HOME_STATE":
      return {
        ...INITIAL_STATE,
      };
    default:
      return state;
  }
};

export default googleReducer;
