import React,{useState} from 'react';
import firestore from '../firebasekv';
import {collection, query, where, getDocs,onSnapshot  } from 'firebase/firestore';

const ValidationComponent = ({textFieldValue}) => {
  const handleClick = async () => {
    try {
      console.log(textFieldValue);

      // Create a query to filter documents by email field
      const q = query(collection(firestore, "registration"), where("id", "==", textFieldValue));

      onSnapshot(q, (querySnapShot) => {
        const data = querySnapShot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
        console.log("bird details array", data);
      });

    } catch (error) {
      console.error('Error fetching data from Firebase:', error);
    }
  };

  return (
   
    <div>
      <button onClick={handleClick}>Validate</button>
    </div>
 
  );
};

export default ValidationComponent;
