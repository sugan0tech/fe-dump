import { useState } from "react";
import "./App.css";
import { Button } from "@mui/base";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Button onClick={() => setCount(count + 1)}> Click Me </Button>
    </>
  );
}

export default App;
