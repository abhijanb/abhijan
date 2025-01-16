// Build a Counter App:
// Use useState to track the count.
// Create buttons to increase and decrease the count.
// Pass the count and event handlers as props between components if you like (optional but great for practice).
import { useState } from "react";
import { Button } from "./Components/Button.components";

function App() {
  const [count, setCount] = useState(0);
 
 const handleIncresae = () => setCount(count+1);
const handledecresae = () => setCount(count-1);

  return (
    <>
      <p>{count}</p>
      <Button handler={handleIncresae} label="increase"/>
      <Button handler={handledecresae} label="decrease"/>
   
    </>
  );
}

export default App;
