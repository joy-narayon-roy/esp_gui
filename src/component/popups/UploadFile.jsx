import React, { useState } from "react";

export default function UploadFile() {
  const [files, setfiles] = useState("");
  async function handelUpload() {
    const formData = new FormData();
    formData.append("file", files[0]);
    formData.append("path",)
    const res = await fetch("/file", {
      method: "POST",
      body: formData,
    });
    console.log(res.status);
    console.log(await res.json());
  }
  return (
    <div className="create-popup">
      <div className="top">
        <button className="btn">Cancel</button>
        <h3>Upload File</h3>
        <button
          disabled={files === "" ? true : false}
          onClick={handelUpload}
          className="btn green"
        >
          Upload
        </button>
      </div>
      <div className="create-popup_main">
        <div className="input-container">
          <label>Folder Name:</label>
          <input
            onChange={(ev) => setfiles(ev.target.files)}
            type="file"
            multiple
          />
        </div>
      </div>
    </div>
  );
}
