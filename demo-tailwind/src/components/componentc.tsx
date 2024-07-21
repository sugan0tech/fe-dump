import { useContext } from "react";
import { UserContext } from "./componenta";

function ComponentC() {
  const { user, setUser } = useContext(UserContext);
  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUser(event.target.value);
  };
  return (
    <>
      <div className="border-black border-2">ComponentC {user}</div>
      <input type="text" value={user} onChange={handleInputChange} />
    </>
  );
}

export default ComponentC;
