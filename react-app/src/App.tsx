import { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";
import { MyAlert } from "./components/MyAlert";
import Message from "./Message";

function App() {
  let items = ["New York", "San Francisco", "Tokyo", "Test", "Something"];

  const [alertVisible, setAlertVisible] = useState(false);
  const handleSelectItem = (item: string) => console.log("from Parent:" + item);

  let title = "Cities";

  return (
    <>
      <MyAlert>
        Hello <span> me </span>
      </MyAlert>
      {alertVisible && (
        <MyAlert classVal="alert-dismissable">Hiden Alert</MyAlert>
      )}
    </>
  );
}

export default App;
