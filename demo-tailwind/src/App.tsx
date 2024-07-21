import { useState } from "react";
import { Button } from "@/components/ui/button";
import "./App.css";
import { ThemeProvider } from "./components/theme-provider";
import { ModeToggle } from "./components/mode-toggle";
import { SelectList } from "./components/select-list";
import { CustomAlert } from "./components/custom-alert";
import { MyCalendar } from "./components/my-calendar";
import { CardContainer } from "./components/card-container";

function App() {
  const [count, setCount] = useState(0);
  const [flag, setFlag] = useState(false);

  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div>
          <Button onClick={() => setCount(count + 1)}>Click me</Button>
          <div>{count}</div>
          <ModeToggle></ModeToggle>
        </div>
        <div>
          <SelectList title="test" context="somethign"></SelectList>
          <SelectList title="test" context="somethign"></SelectList>
          <SelectList title="test" context="somethign"></SelectList>
          <SelectList title="test" context="somethign"></SelectList>
          <SelectList title="test" context="somethign"></SelectList>
        </div>
      </ThemeProvider>
      {flag && <CustomAlert></CustomAlert>}
      <Button onClick={() => setFlag(!flag)}></Button>
      <div>
        <MyCalendar></MyCalendar>
      </div>
      <CardContainer></CardContainer>
    </>
  );
}

export default App;
