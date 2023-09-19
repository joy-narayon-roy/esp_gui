import React from "react";
import Row from "./Row";

export default function Body() {
  return (
    <div className="body">
      <aside></aside>
      <div className="folders">
        <div className="header">
          <div className="name">Name</div>
        </div>
        <div className="list">
          <Row name={"Folder 1"} />
          <Row name={"Folder 1"} />
          <Row name={"Folder 1"} />
          <Row name={"Folder 1"} />
          <Row name={"Folder 1"} />
          <Row name={"Folder 1"} />
          <Row name={"Folder 1"} />
          <Row name={"Folder 1"} />
          <Row name={"Folder 1"} />
          <Row name={"Folder 1"} />
          <Row name={"Folder 1"} />
          <Row name={"Folder 1"} />
          <Row name={"Folder 1"} />
          <Row name={"Folder 1"} />
          <Row name={"Folder 1"} />
          <Row name={"Folder 1"} />
          <Row name={"Folder 1"} />
          <Row name={"Folder 1"} />
          <Row name={"Folder 1"} />
          <Row name={"Folder"} />
        </div>
      </div>
    </div>
  );
}
