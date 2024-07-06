import React, { useState, useEffect, useContext } from 'react';
import ReminderForm from './Components/ReminderForm';
import { remindContext } from './RemindContext/RemindContext';

const App = () => {
  const [reminders, setReminders] = useState([]);
  // const audio = new Audio('/path-to-your-audio-file.mp3'); // Add the path to your audio file

  const {state, setRemind} = useContext(remindContext);

  console.log(state , setRemind);
  // useEffect(() => {
  //   const checkReminders = () => {
  //     const now = new Date().toISOString();
  //     reminders.forEach((reminder, index) => {
  //       if (reminder.time <= now) {
  //         new Notification(reminder.message);
  //         // audio.play();
  //         setReminders(reminders.filter((_, i) => i !== index));
  //       }
  //     });
  //   };

  //   const interval = setInterval(checkReminders, 1000);

  //   return () => clearInterval(interval);
  // }, [reminders]);

  return (
    <div style={{display: 'flex', alignItems:'center', flexDirection: 'column'}}>
      <h1>Reminder App</h1>
      <ReminderForm addReminder={setRemind} />
      <ul>
        {reminders.map((reminder, index) => (
          <li key={index}>
            {reminder.time} - {reminder.message}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default App;
