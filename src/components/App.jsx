import { useEffect } from "react";
import "../style.scss";
import { useDispatch } from "react-redux";
import { getUsersPresent, getUsersQuittin } from "../api/usersApi";
import Leftpanel from "./Leftpanel";
import Rightpanel from "./Rightpanel";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    getUsersPresent(dispatch);
    getUsersQuittin(dispatch);
  }, [dispatch]);

  return (
    <div className="app">
      <Leftpanel />
      <Rightpanel />
    </div>
  );
}

export default App;
