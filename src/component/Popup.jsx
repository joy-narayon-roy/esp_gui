import React from "react";
import UploadFile from "./popups/UploadFile";

function getPopup(showPopup, setShowPopup) {
  switch (showPopup) {
    case "uf":
      return <UploadFile setShowPopup={setShowPopup} />;

    default:
      return <></>;
  }
}

export default function Popup({ showPopup, setShowPopup }) {
  return (
    <div className={`popup ${showPopup && "show"}`}>
      {getPopup(showPopup, setShowPopup)}
    </div>
  );
}
