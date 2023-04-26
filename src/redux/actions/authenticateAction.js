function login(id, password) {
  return (dispath, getState) => {
    console.log("LOGIN-SUCCESS action");
    dispath({ type: "LOGIN-SUCCESS", payload: { id, password } });
  };
}

function logout() {
  return (dispath, getstate) => {
    console.log("LOGOUT action");
    dispath({ type: "LOGOUT", payload: {} });
  };
}
export const authenticateAction = { login, logout };
