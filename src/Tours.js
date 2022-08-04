import React, { useEffect, useState } from 'react';
import Tour from './Tour';

const Tours = () => {
  const [getTours, setTours] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch(
        'https://raw.githubusercontent.com/BachTranAnhDuc/React-Project-Basic-OurTour/main/src/data.json'
      );

      if (res.status >= 200 && res.status <= 299) {
        const data = await res.json();

        console.log(data);
        setTours(data);
      } else {
        throw new Error(res.statusText);
      }
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchData();
  });

  return (
    <>
      {getTours.map((tour) => {
        return <Tour {...tour}></Tour>;
      })}
    </>
  );
};

export default Tours;
