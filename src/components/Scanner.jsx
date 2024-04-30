import React, { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import ValidationComponent from "./ValidationComponent";

export const Scanner = () => {
  const [scanResult, setScanResult] = useState("default");
  const [textFieldValue, setTextFieldValue] = useState("");
  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 250,
        height: 250,
      },
      fps: 1,
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
    <div className="Scanner flex flex-col gap-2">
      <>
        <div id="reader"></div>
        <div className="flex flex-col justify-center items-center">
          {" "}
          {/* <h1 className="text-2xl font-semibold my-4"> OR </h1> */}
          <input
            id="res"
            type="text"
            value={textFieldValue}
            onChange={handleTextFieldChange}
            placeholder="Enter Unique ID"
            className="form-input mt-3 block w-full text-black text-xl p-2 rounded font-semibold flex justify-center items-center bg-white text-center"
          ></input>
        </div>
        <div>
          <ValidationComponent
            textFieldValue={textFieldValue}
            scanResult={scanResult}
          />
        </div>
      </>
    </div>
  );
};
