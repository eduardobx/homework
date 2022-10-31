import React from "react";

const Delet = ({ item, todo, set }) => {
  const deletetext = () => {
    console.log(item.id);
    console.log(todo);
    const deleteF = todo.filter((i) => i.id !== item.id);
    set(deleteF);
  };
  return <button onClick={deletetext}>delete</button>;
};

export default Delet;
