import React, { useEffect, useState } from "react";
import "../styles/index.css";
import left_icon from "../images/icon-left.png";
import right_icon from "../images/icon-right.png";
import list_icon from "../images/list.png";
import Item from "./Item";
import { useRef } from "react";
import Popup from "./Popup";
import ids from "../utilities/id";

export default function Explorer() {
  const [showPopup, setShowPopup] = useState(false);
  const [selected, setSelected] = useState(null);
  const [path, setPath] = useState("/");
  const bodyRef = useRef(null);
  const [loading, setLoading] = useState(true);
  const [items, setItems] = useState(null);
  const [error, setError] = useState(false);

  function handelInput({ target }) {
    setPath(target.value ? target.value : "/");
  }
  function goBack() {
    let currentPath = path.split("/");
    currentPath = currentPath.splice(0, currentPath.length - 1);
    currentPath = currentPath.toLocaleString().replace(/,/g, "/");
    setPath(currentPath ? currentPath : "/");
  }
  function gotoPath(name) {
    setPath(path === "/" ? path + name : path + "/" + name);
  }

  function handelNavBtnClick(btnFor) {
    if (!showPopup) {
      setShowPopup(btnFor);
    } else {
      setShowPopup(false);
    }
  }

  useEffect(() => {
    async function getData() {
      try {
        // const url = "http://192.168.1.5";
        const url = window.location.href;
        const query = new URLSearchParams();
        query.set("path", path);
        const res = await fetch(`${url}/goto?${query.toString()}`);
        // console.log(res);
        if (res.status > 300) {
          throw res;
        }
        let data = await res.json();
        data = data.sort();
        data = data.reduce(
          (pre, curr) => {
            const id = ids.next().value;
            let item = curr.split(".");
            if (item.length === 1) {
              pre.dir[id] = {
                name: curr,
                type: "dir",
                selected: false,
              };
            } else if (item[0] === "" && item.length > 1) {
              pre.dir[id] = {
                name: curr,
                type: "dir",
                selected: false,
              };
            } else {
              pre.file[id] = {
                name: curr,
                type: "file",
                selected: false,
              };
            }
            return pre;
          },
          { file: {}, dir: {} }
        );

        setLoading(false);
        setItems(data);
        setError(false);
      } catch (err) {
        console.log(err);
        setLoading(false);
        setItems(null);
        setError(true);
      }
    }
    getData();
  }, [path]);

  return (
    <div className="explorer">
      <div className="title">ESP File Explorer</div>
      <div className="header">
        <div className="nav-btns">
          <button onClick={goBack}>
            <img src={right_icon} alt="" />
          </button>
          <button>
            <img src={left_icon} alt="" />
          </button>
        </div>
        <div className="path">
          <input type="text" name="path" onChange={handelInput} value={path} />
        </div>
        <div className="views">
          <button>
            <img src={list_icon} alt="" />
          </button>
        </div>
      </div>
      <div className="nav">
        <button onClick={() => handelNavBtnClick("nf")}>New File</button>
        <button onClick={() => handelNavBtnClick("nd")}>New Folder</button>
        <button onClick={() => handelNavBtnClick("r")}>Rename</button>
        <button onClick={() => handelNavBtnClick("uf")}>Upload File</button>
        <button onClick={() => handelNavBtnClick("ud")}>Upload Folder</button>
        <button onClick={() => handelNavBtnClick("del")}>Delete</button>
        <button onClick={() => handelNavBtnClick("dow")}>Download</button>
        <button onClick={() => handelNavBtnClick("det")}>Details</button>
      </div>
      <div className="main">
        <div className="aside"></div>
        <div ref={bodyRef} className="body">
          <Popup showPopup={showPopup} setShowPopup={setShowPopup} />

          {loading && <h3>Loading</h3>}
          {error && <h3>Error</h3>}
          {!loading && !error && !items && <h3>Empty Folder</h3>}
          {!loading && !error && items.dir && (
            <div className="items">
              {Object.keys(items.dir).map((itemId, ind) => (
                <Item
                  key={ind}
                  itemId={itemId}
                  items={items.dir}
                  selected={selected}
                  setSelected={setSelected}
                  gotoPath={gotoPath}
                />
              ))}
              {Object.keys(items.file).map((itemId, ind) => (
                <Item
                  key={ind}
                  itemId={itemId}
                  items={items.file}
                  selected={selected}
                  setSelected={setSelected}
                  gotoPath={gotoPath}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
