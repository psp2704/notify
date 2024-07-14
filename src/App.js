import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import ShowReminders from './Components/ShowReminders'
import RemindForm  from './Components/ReminderForm'

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path="/" element={<ShowReminders />} />
      <Route path="/about" element={<RemindForm />} />
    </Routes>
   </BrowserRouter>
  )
}

export default App