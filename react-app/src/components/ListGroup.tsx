import { useState } from "react";

interface ListGroupProps {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({items, heading, onSelectItem}: ListGroupProps){
  let [selectdIndex, setSelectedIndex]= useState(0);

  const getMessage = () => {
    return items.length === 0 && <p> No item found </p>
  }
  return (
    <>
      <h1>{heading}</h1>
      {getMessage()}
      <ul className="list-group">
        {items.map((item, index)=> {
          return <li
            className={selectdIndex === index ? "list-group-item active" : "list-group-item"}
            key={index}
            onClick={() => {setSelectedIndex(index)
              onSelectItem(item)
            }}
          >
            {item}
          </li>;
        })}
      </ul>
    </>
  );
}

export default ListGroup;
