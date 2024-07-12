import axios from "axios";
import { createContext, useReducer } from "react";

const url = "http://localhost:7000/reminders";
const RemindContext = createContext();

const INITIAL_STATE = {
  reminders: [],
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_REMIND":
      return { ...state, reminders: payload };
    case "GET_REMIND":
      return { ...state, reminders: payload };
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
      const res = await axios.post(url, formData, config);
      dispatch({ type: "SET_REMIND", payload: res?.data?.reminders });
      await getRemind();
    } catch (error) {
      console.error(error);
    }
  };

  // Get the reminder list
  const getRemind = async () => {
    try {
      const res = await axios.get(url, config);
      dispatch({ type: "GET_REMIND", payload: res?.data?.reminders });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RemindContext.Provider value={{ reminders: state.reminders, setRemind, getRemind }}>
      {children}
    </RemindContext.Provider>
  );
};

export default RemindProvider;
export { RemindContext };
