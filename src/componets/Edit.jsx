import React, { useState } from "react";
import Delet from "./Delet";
import Upload from "./Upload";

const Edit = ({ value, item , set , todo}) => {
  const [text2, setText2] = useState(`${value}`);
  const [edit, setEdit] = useState(false);
  const cambiarText = (e) => {
    e.preventDefault();
    {
      item.title = text2;
      
    }
    setEdit(true);
  };
  const changeValueText = (e) => {
    e.preventDefault();
    const valor = e.target.value;
    setText2(valor);
  };

  return (
    <div>
      {edit ? (
        <div key={item.id} className="texte-conte">
          <h2>{item.title}</h2> <Delet set={set} item={item} todo={todo}/> <Upload edit={setEdit} />
        </div>
      ) : (
        <form>
          <input type="text" onChange={changeValueText} value={text2} />
          <button onClick={cambiarText}>load</button>
        </form>
      )}
    </div>
  );
};

export default Edit;
