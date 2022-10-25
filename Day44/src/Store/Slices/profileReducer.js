const INITIAL_STATE = {
  users: [
    {
      fullName: "Test1",
      email: "test1@gmail.com",
    },
  ],

  universities: [],

  name: "",
  email: "",
  phoneNo: "",
};

const profileReducer = (state = INITIAL_STATE, action) => {
  const { type, payload } = action;

  switch (type) {
    case "SET_NAME":
      return {
        ...state,
        name: payload,
      };
    case "SET_EMAIL":
      return {
        ...state,
        email: payload,
      };
    case "SET_PHONENO":
      return {
        ...state,
        phoneNo: payload,
      };
    case "SET_USER_STATE":
      return {
        ...state,
        ...payload,
      };
    default:
      return state;
  }
};

export default profileReducer;
