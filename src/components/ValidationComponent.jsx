import React, { useState } from "react";
import firestore from "../config/firebasekv";
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

const ValidationComponent = ({ textFieldValue }) => {
  const handleClick = async () => {
    try {
      console.log("Text Field Value:", textFieldValue);

      // Create a query to filter documents by ID field
      const q = query(
        collection(firestore, "registration"),
        where("id", "==", textFieldValue)
      );

      console.log("Query:", q);

      onSnapshot(q, (querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().name,
          dependants: doc.data().dependants,
        }));
        console.log("Result:", data);
      });
    } catch (error) {
      console.error("Error fetching data from Firebase:", error);
    }
  };

  return (
    <div>
      <button onClick={handleClick}>Validate</button>
    </div>
  );
};

export default ValidationComponent;
