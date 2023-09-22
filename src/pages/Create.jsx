import React from "react";
import "../styles/create.css";
import { NavLink, Outlet } from "react-router-dom";

export default function Create() {
  return (
    <>
      <div className="create">
        <div className="title">Create</div>
        <div className="nav">
          <NavLink className="tab_name" to={"folder"}>
            Folder
          </NavLink>
          <NavLink className="tab_name" to={"file"}>
            File
          </NavLink>
        </div>
        <div className="tab">
          <Outlet />
        </div>
      </div>
    </>
  );
}
