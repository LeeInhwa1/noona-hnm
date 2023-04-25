
function login(id, password) {
  return (dispath, getState) => {
    console.log("LOGIN-SUCCESS action");
    dispath({ type: "LOGIN-SUCCESS", payload: { id, password } });
  };
}
export const authenticateAction = { login };
