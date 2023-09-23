import React, { useRef } from "react";
import folder_icon from "../images/folder.png";
import file_icon from "../images/file_icone.png";

export default function Item({
  items,
  itemId,
  gotoPath,
  setSelected,
  selected,
}) {
  const { name, type } = items[itemId];
  const itemRef = useRef();
  function handelClick() {
    if (type === "dir") {
      gotoPath(name);
    }
  }

  return (
    <div ref={itemRef} onClick={handelClick} className={`item`}>
      <img src={type === "dir" ? folder_icon : file_icon} alt="" />
      <span className="name">{name}</span>
    </div>
  );
}
