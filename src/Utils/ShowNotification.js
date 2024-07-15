import schedule from 'node-schedule'

const remindSchdule = (list) => list.forEach (({hour, minute}, index) => {
  return schedule.scheduleJob({hour, minute}, ()=>{
    new Notification( `Reminder ${index + 1} at ${hour}:${minute}`)
  })
})

const scheduleNotification = (list) => {
  if ("Notification" in window) {
    if (Notification.permission === "granted") {
      console.log("granted");
      remindSchdule(list)
    } else if (Notification.permission === "denied") {
      console.log("denied");
    } else {
      console.log("default");
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          remindSchdule(list)
        }
      });
    }
  } else {
    console.log("not present");
  }
};

export { scheduleNotification };
