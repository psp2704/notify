import React, { useContext, useEffect } from 'react';
import { remindContext } from './RemindContext/RemindContext';
import ReminderForm from './Components/ReminderForm';

function App() {
  const { reminders, getRemind, setRemind } = useContext(remindContext);

  // Fetch reminders when the component mounts
  useEffect(() => {
    getRemind();
  }, []);

  return (
    <div className='flex items-center justify-center flex-col'>
      <h1>Remind App</h1>
      <ReminderForm />
      {reminders?.length === 0 ? 
        <div style={{marginTop: '12px'}}>No List Items Found</div>
        :
        <ul>
          {reminders?.map((item, index) => (
            <li key={index}>
              {item.time} - {item.message}
            </li>
          ))}
        </ul>
      }
    </div>
  );
}

export default App;
