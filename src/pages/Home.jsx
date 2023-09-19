import React, { useState } from "react";
import "../styles/index.css";
import back_btn from "../images/back_btn.png";
import refresh_btn from "../images/refresh_btn.png";
import Body from "../component/Body";

export default function Home() {
  const [path, setPath] = useState("/");
  return (
    <div className="explorar">
      <div className="header">
        <div className="right"></div>
        <div className="title">ESP File Explorar</div>
        <div className="left"></div>
      </div>
      <div className="path_controller">
        <div className="buttons">
          <button>
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
            value={"SD:" + path}
          />
          <button>Go</button>
        </div>
      </div>

      <Body />

      <div className="footer"></div>
    </div>
  );
}
