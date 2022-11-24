import { createContext, useReducer } from "react";

const initialState = {
    user: null,
  setUser: (user) => {},
};

const UserContext = createContext(initialState);

const userReducer = (state, action) => {
  switch (action.type) {
    case "SET_USER":
      return {  ...state, user: action.user };
    default:
      return state;
  }
};

export const UserContextProvider = (props) => {
  const [userState, dispatchUser] = useReducer(userReducer, initialState);

  const setUserHandler = (user) => {
    dispatchUser({ type: "SET_USER", user });
  };

  const content = {
    ...userState,
    setUser: setUserHandler,
  };
  return (
    <UserContext.Provider value={content}>
      {props.children}
    </UserContext.Provider>
  );
};

export default UserContext;
