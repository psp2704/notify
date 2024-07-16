import axios from "axios";
import { createContext, useReducer } from "react";
import { scheduleNotification } from "../Utils/ShowNotification";

const url = "http://localhost:7000/reminders";
const RemindContext = createContext();

const INITIAL_STATE = {
  reminders: [],
  reminder:[],
  upComingReminders: [],
  loading: false,
  error: null,
};

const reducer = (state, action) => {
  const { type, payload } = action;
  switch (type) {
    case "SET_REMIND":
      return {
        ...state,
        reminders: payload?.reminders,
        upComingReminders: payload?.upcomingServices,
      };
    case "GET_ALL_REMIND":
      return {
        ...state,
        reminders: payload?.reminders,
        upComingReminders: payload?.upcomingServices,
      };
    case "DELETE_REMIND":
      return {
        ...state,
        reminders: payload?.reminders,
        upComingReminders: payload?.upcomingServices,
      };
      case "GET_SINGLE_REMIND":
      return {
        ...state,
        reminder : payload?.reminder
      };
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
      dispatch({ type: "SET_REMIND", payload: res?.data });
      navigate("/dashboard");
    } catch (error) {
      console.log(error?.response?.data?.stack)
    }
  };

  // Get the reminder list
  const getRemind = async () => {
    try {
      const res = await axios.get(url, config);
      if (res?.status === 200) {
        dispatch({ type: "GET_ALL_REMIND", payload: res?.data });
        console.log(res?.data);
        if (res?.data?.reminders?.length > 0) {
          console.log(
            `Length of Responce Data : ${res?.data?.reminders?.length}`
          );
          let dateArray = res?.data?.reminders?.map((ele) => {
            return { nextServiceDate: new Date(ele.nextServiceDate) };
          });
          let list = dateArray.map((ele) => {
            return {
              month: ele.nextServiceDate.getMonth(),
              date: ele.nextServiceDate.getDate(),
              hour: ele.nextServiceDate.getHours(),
              minute: ele.nextServiceDate.getMinutes(),
            };
          });
          console.log(list);
          // scheduleNotification(list);
        } else {
          console.log("no you don't have anything lol");
        }
      }
    } catch (error) {
      console.log(error?.response?.data?.stack)
    }
  };

  const deleteRemind = async (id) => {
    try {
      const res = await axios.delete(`${url}/${id}`, config);
      dispatch({ type: "DELETE_REMIND", payload: res?.data });
      console.log("success");
    } catch (error) {
      console.log(error?.response?.data?.stack)
    }
  };

  const getSingleRemind = async (id) =>{
    try {
      const res = await axios.get(`${url}/${id}`, config);
      dispatch({ type: "GET_SINGLE_REMIND", payload: res?.data });
      console.log(res?.data)
    } catch (error) {
      console.log(error?.response?.data?.stack)
    }
  }

  const updateRemind = async(id, formdata, navigate) =>{
    try {
      const res = await axios.put(`${url}/${id}`, formdata, config);
      dispatch({ type: "UPDATE_REMIND", payload: res?.data });
      console.log(res?.data)
      navigate("/dashboard")
    } catch (error) {
      console.log(error?.response?.data?.stack)
    }
  }

  return (
    <RemindContext.Provider
      value={{
        reminders: state.reminders,
        setRemind,
        getRemind,
        deleteRemind,
        getSingleRemind,
        updateRemind,
        upComingReminders: state.upComingReminders,
        reminder: state.reminder
      }}
    >
      {children}
    </RemindContext.Provider>
  );
};

export default RemindProvider;
export { RemindContext };
