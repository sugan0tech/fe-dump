import { useEffect, useState } from "react";
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

  function countUpdateHandler() {
    setCount((c) => c + 1);
  }

  useEffect(() => {
    console.log("Rereder bro ");
  });
  useEffect(() => {
    document.title = count.toString();
  }, [count]);
  return (
    <>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <div>
          <Button onClick={() => setCount(count + 1)}>Click me</Button>
          <div>{count}</div>
          <ModeToggle></ModeToggle>
        </div>
        <div className="">
          <Button
            className="px-6 py-2 font-medium bg-indigo-500 rounded-none hover:bg-indigo-500 text-white w-fit transition-all shadow-[5px_5px_0px_black] active:shadow-none hover:translate-x-[3px] active:translate-y-[3px]"
            onClick={countUpdateHandler}
          >
            Increase Count
          </Button>
        </div>
        <div className="flex gap-3 hover:animate-bounce">
          <SelectList title="test" context="somethign"></SelectList>
          <SelectList title="test" context="somethign"></SelectList>
          <SelectList title="test" context="somethign"></SelectList>
          <SelectList title="test" context="somethign"></SelectList>
          <SelectList title="test" context="somethign"></SelectList>
        </div>
      </ThemeProvider>
      {flag && <CustomAlert></CustomAlert>}
      <Button onClick={() => setFlag(!flag)}></Button>
      <div className="flex">
        <MyCalendar></MyCalendar>
      </div>
      <CardContainer></CardContainer>
    </>
  );
}

export default App;
