import React, { useEffect, useRef, useState } from "react";
import "../styles/index.css";
import back_btn from "../images/back_btn.png";
import refresh_btn from "../images/refresh_btn.png";
import Body from "../component/Body";
import { Link } from "react-router-dom";

export default function Home() {
  const [path, setPath] = useState("/");
  const contexManu = useRef();
  useEffect(() => {
    window.addEventListener("contextmenu", (ev) => {
      ev.preventDefault();
      const { x, y } = ev;

      if (!contexManu.current) {
        return false;
      }
      contexManu.current.style.top = `${y}px`;
      contexManu.current.style.left = `${x}px`;
      contexManu.current.classList.add("show");
    });
  }, []);

  function goBack() {
    const entrys = path.split("/");
    entrys.pop();
    setPath(
      entrys.toString().replace(/,/g, "/") === ""
        ? "/"
        : entrys.toString().replace(/,/g, "/")
    );
  }
  return (
    <>
      <div id="context_manu" ref={contexManu} className="context">
        <ul>
          <li>
            <Link to={"/create/folder"}>New Folder</Link>
          </li>
          <li>
            <Link to={"/create/file"}>New File</Link>
          </li>
          <li>Upload</li>
        </ul>
      </div>

      <div className="explorar">
        <div className="header">
          <div className="right"></div>
          <div className="title">ESP File Explorar</div>
          <div className="left"></div>
        </div>
        <div className="path_controller">
          <div className="buttons">
            <button onClick={goBack}>
              <img src={back_btn} alt="" />
            </button>
            <button>
              <img src={refresh_btn} alt="" />
            </button>
            <button>
              <img src={back_btn} alt="" />
            </button>
          </div>
          <div className="input_controlle">
            <input
              onChange={(e) => setPath(e.target.value)}
              type="text"
              value={path}
            />
            <button>Go</button>
          </div>
        </div>

        <Body path={path} set_path={setPath} />

        <div className="footer"></div>
      </div>
    </>
  );
}
