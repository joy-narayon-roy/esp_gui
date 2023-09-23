import React, { useState } from "react";

export default function Folder() {
  const [folderName, setFolderName] = useState("");
  function createFolder(ev) {
    ev.preventDefault();
    if (!folderName) {
      alert("Enter name to create");
      return false;
    }
    console.log("Create Folder name : ", folderName);
  }
  return (
    <div className="tab_body">
      <form onSubmit={createFolder}>
        <div className="input_container">
          <label htmlFor="">Name :</label>
          <input
            autoFocus
            name="name"
            type="text"
            onChange={(ev) => setFolderName(ev.target.value)}
            value={folderName}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
      <form>
        <input type="file" name="files" />
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}
