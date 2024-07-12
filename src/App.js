import React, { useContext, useEffect } from "react";
import {RemindContext}  from "./RemindContext/RemindContext";
import ReminderForm from "./Components/ReminderForm";

const App = () => {
  const { reminders, getRemind } = useContext(RemindContext);

  useEffect(() => {
    getRemind();
  }, [getRemind]);

  const notify = () => {
    new Notification("Hey, let's make a trip");
    // document.getElementById("audioBeep").play();
  };

  const sendNotification = () => {
    if ("Notification" in window) {
      if (Notification.permission === "granted") {
        console.log("granted");
        notify();
      } else if (Notification.permission === "denied") {
        console.log("denied");
      } else {
        console.log("default");
        Notification.requestPermission().then((permission) => {
          if (permission === "granted") {
            notify();
          }
        });
      }
    } else {
      console.log("not present");
    }
  };

  useEffect(() => {
    if (reminders.length > 0) {
      // const reminderTime = new Date(reminders[0].time);
      // const currentTime = new Date();
      // const timeDifference = reminderTime - currentTime;

      // console.log("Time difference:", timeDifference);

      // if (timeDifference > 0) {
        setTimeout(() => {
          sendNotification();
        }, 5000);
      // }
    }
  }, []);

  return (
    <div className="flex items-center justify-center flex-col">
      <h1>Remind App</h1>
      <ReminderForm />
      <ul>
        {reminders.map((item, index) => (
          <li key={index}>
            {item.time} - {item.message}
          </li>
        ))}
      </ul>
      <audio id="audioBeep" src="path/to/sound.mp3" />
    </div>
  );
};

export default App;
