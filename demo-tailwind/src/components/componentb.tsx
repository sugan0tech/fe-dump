import ComponentC from "./componentc";

function ComponentB() {
  return (
    <div className="border-black border-2 px-2">
      ComponentB
      <ComponentC></ComponentC>
    </div>
  );
}

export default ComponentB;
