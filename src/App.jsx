import { ToastContainer } from "react-toastify";
import NavHome from "./navigation/NavHome";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <>
      <NavHome />
      <ToastContainer />
    </>
  );
}

export default App;
