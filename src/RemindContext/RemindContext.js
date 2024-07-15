import axios from "axios";
import { createContext, useReducer, useState } from "react";
import { scheduleNotification } from "../Utils/ShowNotification";

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
  const setRemind = async (formData, navigate) => {
    try {
      const res = await axios.post(url, formData, config);
      dispatch({ type: "SET_REMIND", payload: res?.data?.reminders });
      navigate("/dashboard");
    } catch (error) {
      console.error(error);
    }
  };

  // Get the reminder list
  const getRemind = async (remind) => {
    try {
      const res = await axios.get(url, config);
      if (res?.status === 200) {
        dispatch({ type: "GET_REMIND", payload: res?.data?.reminders });
        if (res?.data?.reminders?.length > 0) {
          console.log(
            "Length of Responce Data" + ': ' + res?.data?.reminders?.length
          );
          let timeArray = res?.data?.reminders?.map((ele)=>{
            return {time : new Date(ele.time)}
          })
          let list = timeArray.map((ele)=>{
            return {month:ele.time.getMonth(), date:ele.time.getDate(), hour : ele.time.getHours(), minute : ele.time.getMinutes()}
          })
          scheduleNotification(list);
        } else {
          console.log("no you don't have anything lol");
        }
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <RemindContext.Provider
      value={{ reminders: state.reminders, setRemind, getRemind }}
    >
      {children}
    </RemindContext.Provider>
  );
};

export default RemindProvider;
export { RemindContext };
