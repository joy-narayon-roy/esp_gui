import React from "react";
import UploadFile from "./popups/UploadFile";

function getPopup(showPopup, setShowPopup, path) {
  switch (showPopup) {
    case "uf":
      return <UploadFile path={path} setShowPopup={setShowPopup} />;

    default:
      return <></>;
  }
}

export default function Popup({ showPopup, setShowPopup, path }) {
  return (
    <div className={`popup ${showPopup && "show"}`}>
      {getPopup(showPopup, setShowPopup, path)}
    </div>
  );
}
