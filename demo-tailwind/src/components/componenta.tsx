import { useState, createContext } from "react";
import ComponentB from "./componentb";

interface UserData {
  user: string;
  setUser: any;
}
export const UserContext = createContext<UserData>({
  user: "",
  setUser: () => {},
});

function ComponentA() {
  const [user, setUser] = useState("Suga");
  createContext;
  return (
    <div className="border-black border-2 p-2">
      ComponentA {user}
      <UserContext.Provider value={{ user, setUser }}>
        <ComponentB></ComponentB>
      </UserContext.Provider>
    </div>
  );
}

export default ComponentA;
