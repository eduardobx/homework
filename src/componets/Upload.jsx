import React from "react";

const Upload = ({ edit }) => {
  const editar = () => {
    edit(true);
  };

  return <button onClick={editar}>uppdate</button>;
};

export default Upload;
