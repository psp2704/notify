import schedule from 'node-schedule'

const timesArray = [
  { hour: 23, minute: 14 },  // Example times
  { hour: 23, minute: 13 },
  // Add more times as needed
];

const remindSchdule = () => timesArray.forEach (({hour, minute}, index) => {
  return schedule.scheduleJob({hour, minute}, ()=>{
    // console.log(`Reminder ${index + 1} at ${hour}:${minute}`)
    new Notification( `Reminder ${index + 1} at ${hour}:${minute}`)
  })
})

// const letsGo = schedule.scheduleJob(time, ())

const notify = (msg) => {
  new Notification(msg);
};

const sendNotification = (message) => {
  if ("Notification" in window) {
    if (Notification.permission === "granted") {
      console.log("granted");
      // notify(message);
      remindSchdule()
    } else if (Notification.permission === "denied") {
      console.log("denied");
    } else {
      console.log("default");
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          // notify(message);
          remindSchdule()
        }
      });
    }
  } else {
    console.log("not present");
  }
};

const scheduleNotification = (msg) => {
  // if (reminders.length > 0) {
  //   const reminderTime = new Date(reminders[0].time);
  //   const currentTime = new Date();
  //   const timeDifference = reminderTime - currentTime;

  //   console.log("Time difference:", timeDifference);

  //   if (timeDifference > 0) {
  // setTimeout(() => {
  //   sendNotification(msg);
  // }, 5000);
  //   }
  // }

  sendNotification(msg)
};

export { scheduleNotification };
