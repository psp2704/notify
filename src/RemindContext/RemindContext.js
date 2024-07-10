import axios from "axios";
import { createContext, useReducer } from "react";

const url = "http://localhost:7000/reminders";
const remindContext = createContext();

const INITIAL_STATE = {
  reminders: [],
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_REMIND":
      return { ...state };
    case "GET_REMIND":
      return { ...state, reminders: action.payload };
    default:
      return state;
  }
};

const RemindProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  const config = {
    headers: {
      "Content-Type": "application/json",
    },
  };

  // Add reminder
  const setRemind = async (formData) => {
    try {
      await axios.post(url, formData, config);
      getRemind();
    } catch (error) {
      console.error(error);
    }
  };

  // Get the reminder list
  const getRemind = async () => {
    try {
      const res = await axios.get(url, config);
      dispatch({ type: "GET_REMIND", payload: res.data.reminders });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <remindContext.Provider value={{ ...state, setRemind, getRemind }}>
      {children}
    </remindContext.Provider>
  );
};

export default RemindProvider;
export { remindContext };
