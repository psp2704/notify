import axios from "axios";
import { createContext, useReducer } from "react";

const url = "http://localhost:7000/reminders";
const remindContext = createContext();

const INITIAL_STATE = {
  remind: false,
  setRemind: () => {
    console.log("setRemind");
  },
};

const reducer = (state, action) => {
  switch (action.type) {
    case "setRemind":
      return { ...state, remind: action.remind };
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

  //   add reminder
  const setRemind = async (formData) => {
    try {
      const res = await axios.post(url, formData, config);
      if (res.ok) {
        // dispatch({ type: "setRemind", remind: res.data.remind });
        console.log(res)
      }
    } catch (error) {
      console.log(error.message);
    }
  };

//   const getRemind = async axios.get(url, fo)

  return (
    <remindContext.Provider value={{ ...state, setRemind }}>
      {children}
    </remindContext.Provider>
  );
};
export default RemindProvider;
export { remindContext };
