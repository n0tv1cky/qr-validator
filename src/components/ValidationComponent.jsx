import React, { useEffect, useState } from "react";
import firestore from "../config/firebasekv";
import {
  collection,
  query,
  where,
  onSnapshot,
  doc,
  updateDoc
} from "firebase/firestore";

const ValidationComponent = ({ textFieldValue }) => {
  const [message, setMessage] = useState("");
  const handleClick = async () => {
    try {
      console.log(textFieldValue);

      // Create a query to filter documents by email field
      const q = query(
        collection(firestore, "registration"),
        where("id", "array-contains", textFieldValue)
      );
      let processed = false; // 
      const unsubscribe=onSnapshot(q, (querySnapShot) => {
        const data = querySnapShot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        if (data.length > 0 && !processed) {
          const studentName = data[0].data.name[0]; // Access the name attribute         
          const year = data[0].data.passout[0];
          const deps = data[0].data.dependants[0]?data[0].data.dependants[0]:0;
          const val = data[0].data.used[0];
          
          if(val !== "1"){
          setMessage(studentName +" of "+year+" with "+deps+" guests is successfully registered !!")          
          }else{
          setMessage(studentName +" of "+year +" is already registered . The code can't be used again !!")
          }
          updateUsed(data[0].id);
          processed=true;
          unsubscribe();
        } else {
          // Handle case when no document is found
          setMessage("Invalid Registration Code")
          processed=true;
        }
      });
    } catch (error) {
      console.error("Error fetching data from Firebase:", error);
    }
  };

  const updateUsed = async (docId) => {
    try {
      // Reference to the document
      const regDocRef = doc(firestore, "registration", docId);

      // Update the used field
      await updateDoc(regDocRef, {
        used: ["1"] // Assuming "used" is an array field
      });

      console.log("Document successfully updated!");
    } catch (error) {
      console.error("Error updating document:", error);
    }
  };

  return (
    <div>
      <div id="msg">{message}</div>
      <button onClick={handleClick}>Validate</button>
    </div>
  );
};

export default ValidationComponent;
