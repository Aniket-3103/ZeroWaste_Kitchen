import { ToastContainer } from "react-toastify";
import NavHome from "./navigation/NavHome";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    // Request notification permission
    if (Notification.permission === 'default') {
        Notification.requestPermission().then((permission) => {
            if (permission === 'granted') {
                console.log('Notification permission granted.');
            } else {
                console.log('Notification permission denied.');
            }
        });
    }
    const setNotificationTime = () => {
      const notificationTime = new Date();
      notificationTime.setSeconds(notificationTime.getSeconds() + 10); // 10 seconds from now
      localStorage.setItem('notificationTime', notificationTime.toISOString());
      console.log(`Notification set for ${notificationTime}`);
    };
    setNotificationTime();
  }, []);
  return (
    <>
      <NavHome />
      <ToastContainer />
    </>
  );
}

export default App;
