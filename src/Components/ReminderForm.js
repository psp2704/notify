import React, {  useContext, useState } from "react";
import { RemindContext } from "../RemindContext/RemindContext";

const ReminderForm = ()=> {

  const {setRemind} = useContext(RemindContext)

  const [formdata, setFormdata] = useState({
    time: "",
    message: "",
  });

  // destructure the form properties 
  const { time, message } = formdata;

  // Handle data change
  const onChangeInput = (e) => {
    setFormdata({ ...formdata, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setRemind(formdata)
    // addReminder(formdata);
    setFormdata({ time: "", message: "" });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="datetime-local"
        name="time"
        value={time}
        onChange={onChangeInput}
        required
      />
      <input
        type="text"
        name="message"
        value={message}
        onChange={onChangeInput}
        placeholder="Reminder message"
        required
      />
      <button type="submit">Set Reminder</button>
    </form>
  );
};

export default ReminderForm;
