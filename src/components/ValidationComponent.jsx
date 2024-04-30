import React, { useEffect, useState } from "react";
import firestore from "../config/firebasekv";
import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  updateDoc,
} from "firebase/firestore";

const ValidationComponent = ({ textFieldValue, scanResult }) => {
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("fail");
  const handleClick = async () => {
    try {
      console.log(textFieldValue);

      // Create a query to filter documents by email field
      const q = query(
        collection(firestore, "registration"),
        where("id", "array-contains", textFieldValue)
      );
      let processed = false; //
      const unsubscribe = onSnapshot(q, (querySnapShot) => {
        const data = querySnapShot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        if (data.length > 0 && !processed) {
          const studentName = data[0].data.name[0]; // Access the name attribute
          const year = data[0].data.passout[0];
          const deps = data[0].data.dependants[0]
            ? data[0].data.dependants[0]
            : 0;
          const val = data[0].data.used[0];

          if (val !== "1") {
            setMessage(
              studentName +
                " of " +
                year +
                " Batch with " +
                deps +
                " guests is successfully registered"
            );
            setStatus("success");
          } else {
            setMessage(
              studentName +
                " of " +
                year +
                " Batch with " +
                deps +
                " guests is ALREADY REGISTERED"
            );
            setStatus("duplicate");
          }
          updateUsed(data[0].id);
          processed = true;
          unsubscribe();
        } else {
          // Handle case when no document is found
          // if (scanResult === "default") {
          //   setMessage("");
          // } else {
          setMessage("Invalid Registration Code");
          // }
          processed = true;
        }
      });
    } catch (error) {
      console.error("Error fetching data from Firebase:", error);
    }
  };

  useEffect(() => {
    handleClick();
  }, [scanResult]);

  const updateUsed = async (docId) => {
    try {
      if (!textFieldValue && !scanResult) {
        return;
      }
      // Reference to the document
      const regDocRef = doc(firestore, "registration", docId);

      // Update the used field
      await updateDoc(regDocRef, {
        used: ["1"], // Assuming "used" is an array field
      });

      console.log("Document successfully updated!");
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center m-4 my-1 gap-2">
      <div
        className="flex justify-center items-center text-center max-width-md"
        id="msg"
      >
        {message && (textFieldValue || scanResult) && <p>{message}</p>}
        {/* {message} */}
      </div>
      <button
        className="flex items-center justify-center"
        onClick={handleClick}
      >
        Validate
      </button>
    </div>
  );
};

export default ValidationComponent;
