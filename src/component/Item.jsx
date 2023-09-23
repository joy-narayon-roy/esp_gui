import React, { useRef } from "react";
// import folder_icon from "../images/folder.png";
import file_icon from "../images/file_icone.png";
const folder_icon =
  "https://firebasestorage.googleapis.com/v0/b/files-997ba.appspot.com/o/folder.png?alt=media&token=e3369548-eaed-47cc-9666-4f81190c995c";

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
      {type === "dir" ? (
        <img src={folder_icon} alt="" />
      ) : (
        <img src={file_icon} alt="" />
      )}

      <span className="name">{name}</span>
    </div>
  );
}
