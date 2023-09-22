import React from "react";
import folder from "../images/folder.png";
import delete_img from "../images/delete_img.png";
import download from "../images/download_img.png";

export default function Row({ name, path, set_path }) {
  function goToPath() {
    set_path(path === "/" ? "/" + name : path + "/" + name);
  }
  return (
    <div className="row" onClick={goToPath}>
      <button>
        <img src={folder} alt="" />
      </button>
      <span className="name">{name}</span>
      <button>
        <img src={download} alt="" />
      </button>
      <button>
        <img src={delete_img} alt="" />
      </button>
    </div>
  );
}
