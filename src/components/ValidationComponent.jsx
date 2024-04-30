import React, { useEffect, useState } from "react";
import firestore from "../config/firebasekv";
import {
  collection,
  query,
  where,
  getDocs,
  onSnapshot,
} from "firebase/firestore";

const ValidationComponent = ({ textFieldValue }) => {
  const [name, setName] = useState("");
  const [dependants, setDependants] = useState(0);
  const handleClick = async () => {
    try {
      console.log(textFieldValue);

      // Create a query to filter documents by email field
      const q = query(
        collection(firestore, "registration"),
        where("id", "array-contains", textFieldValue)
      );

      onSnapshot(q, (querySnapShot) => {
        const data = querySnapShot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }));
        if (data.length > 0) {
          const studentName = data[0].data.name[0]; // Access the name attribute
          console.log("student name", studentName);
          setName(studentName);
        } else {
          // Handle case when no document is found
          setName("No student found");
        }
      });
    } catch (error) {
      console.error("Error fetching data from Firebase:", error);
    }
  };

  return (
    <div>
      <div>Name: {name}</div>
      <div>Dependants: {dependants}</div>
      <button onClick={handleClick}>Validate</button>
    </div>
  );
};

export default ValidationComponent;
