import React, { useContext, useEffect } from 'react'
import { RemindContext } from '../RemindContext/RemindContext'



function ShowReminders() {
    const {reminders, getRemind} = useContext(RemindContext);

    useEffect(()=>{
        getRemind()
    },[])
  return (
    <>
        <h2>List of the Reminders</h2>
        <ul>
        {reminders?.length === 0 ?  <li>No reminders</li> :
        reminders.map((item, index) => (
          <li key={index}>
            {item.time} - {item.message}
          </li>
        ))}
      </ul>
    </>
  )
}

export default ShowReminders