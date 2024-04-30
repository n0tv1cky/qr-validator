import React, { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import ValidationComponent from "./ValidationComponent";

export const Scanner = () => {
  const [scanResult, setScanResult] = useState(null);
  const [textFieldValue, setTextFieldValue] = useState("");
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 5,
    });
    scanner.render(success, error);

    function success(result) {
      scanner.clear();
      setScanResult(result);
      setTextFieldValue(result);
    }
    function error(err) {
      // console.warn(err);
    }
   
  }, []);

  const handleTextFieldChange = (event) => {
    setTextFieldValue(event.target.value);
  };

  return (
   
    <div className="Scanner">   
      {scanResult ? (
        <>
          <div>
            {" "}
           Unique ID :
            <input
              id="res"
              type="text"
              value={textFieldValue}
              onChange={handleTextFieldChange}
            ></input>
          </div>
          <br />
          <br />
          <div>
            <ValidationComponent textFieldValue={textFieldValue} />
          </div>
        </>
      ) : (
        <>
          <div id="reader"></div>
        </>
      )}
    </div>
  );
};
