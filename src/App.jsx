import { useState } from "react";
import Stuff from "./Stuff";
import Timer from "./Timer";
import "./App.css";

const App = () => {
  const [showTimer, setShowTimer] = useState(false);
    return (
        <>
          <h1>Timer!</h1>
          <button onClick={() => setShowTimer((prev) => !prev)}>{showTimer ? "Show timer" : "Hide timer"}</button>
          {showTimer ? <Stuff /> : <Timer />}
        </>
    );
};
export default App;
