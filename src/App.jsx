import "./App.css";
import timeToWord from "./timeToWord";
import Clock from "./Clock";
import { useState, useEffect } from "react";

const App = () => {
  const [currentTime, setCurrentTime] = useState({
    letters: [],
    additionalMinutes: 0,
  });

  const getCurrentTime = () => {
    const date = new Date();
    const minutes = date.getMinutes();
    let hours = date.getHours();
    if (hours > 12) {
      hours -= 12;
    } else if (hours === 0) {
      hours = 12;
    }
    return { hours: hours, minutes: minutes };
  };

  const setTime = () => {
    const time = timeToWord(getCurrentTime());
    console.log(time);
    setCurrentTime(time);
  };

  useEffect(() => {
    setTime();
  });

  return (
    <div id="app">
      <div className="clock-container">
        <Clock currentTime={currentTime} />
      </div>
    </div>
  );
};

export default App;
