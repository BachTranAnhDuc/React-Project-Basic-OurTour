import React, { useEffect, useState } from "react";
import data from "./data.json";

const Tours = () => {
 const [getTours, setTours] = useState([]);

 const fetchData = () => {
  try {
   const res = await fetch('./data.json');
   const data = await res.json();
   
  } catch (err) {
   console.error(err);
  }
 }

 useEffect(() => {
  fetchData();
 })
  return (
    <>
      <h2 className="heading__secondary">Our Tours</h2>
      <div className="tour">
       <img src="" alt="" className="tour__img" />
      </div>
    </>
  );
};

export default Tours;
