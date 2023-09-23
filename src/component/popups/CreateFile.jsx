import React from "react";

export default function CreateFile() {
  return (
    <div className="create-popup">
      <div className="top">
        <button className="btn">Cancel</button>
        <h3>New Folder</h3>
        <button className="btn green">Create</button>
      </div>
      <div className="create-popup_main">
        <div className="input-container">
          <label>Folder Name:</label>
          <input type="text" />
        </div>
      </div>
    </div>
  );
}
