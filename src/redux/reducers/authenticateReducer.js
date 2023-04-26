let initialState = {
  id: "",
  password: "",
  authenticate: false,
};
function authenticateReducer(state = initialState, action) {
  let { type, payload } = action;
  switch (type) {
    case "LOGIN-SUCCESS":
      console.log("LOGIN-SUCCESS Reducer");
      return {
        ...state,
        id: payload.id,
        password: payload.password,
        authenticate: true,
      };
    case "LOGOUT":
      console.log("LOGOUT");
      return {
        ...state,
        id: "",
        password: "",
        authenticate: false,
      };
    default:
      return { ...state };
  }
}
export default authenticateReducer;
