import schedule from "node-schedule";

const remindSchdule = (list) =>
  list.forEach(({ hour, minute }, index) => {
    return schedule.scheduleJob({ hour, minute }, () => {
      new Notification(`Reminder ${index + 1} at ${hour}:${minute}`);
    });
  });

const scheduleNotification = (list) => {
  if ("Notification" in window) {
    if (Notification.permission === "granted") {
      console.log("granted");
      remindSchdule(list);
    } else if (Notification.permission === "denied") {
      console.log("denied");
    } else {
      console.log("default");
      Notification.requestPermission().then((permission) => {
        if (permission === "granted") {
          remindSchdule(list);
        }
      });
    }
  } else {
    console.log("not present");
  }
};

const formatDate = (dateString) => {
  const date = new Date(dateString);
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const year = date.getFullYear();
  return `${day}/${month}/${year}`;
};

const specifiedFormatDate = (dateString) => {
  const date = new Date(dateString);
  if (date.getHours() && date.getMinutes()) {
    const hour = date.getHours().toString().padStart(2, "0");
    const minute = date.getMinutes().toString().padStart(2, "0");
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${year}-${month}-${day}T${hour}:${minute}`;
  } else {
    const day = date.getDate().toString().padStart(2, "0");
    const month = (date.getMonth() + 1).toString().padStart(2, "0");
    const year = date.getFullYear();
    return `${year}-${month}-${day}`;
  }
};

export { scheduleNotification, formatDate, specifiedFormatDate };
