import React, { useState } from "react";
import Delet from "./Delet";
import Edit from "./Edit";
import Upload from "./Upload";

const Homework = ({ item, value, todo, set }) => {
  const [edit, setEdit] = useState(false);
  return (
    <div>
      {edit ? 
        <Edit item={item} value={value} set={set} todo={todo} />
      : 
        <div  key={item.id} className="texte-conte">
         <h2>{item.title}</h2>  <Delet set={set} item={item} todo={todo} />{" "}
          <Upload edit={setEdit} />
        </div>
}
    </div>
  );
};

export default Homework;
