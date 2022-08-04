import React, { useEffect, useState } from 'react';

const Tours = () => {
  const [getTours, setTours] = useState([]);

  const fetchData = async () => {
    try {
      const res = await fetch('https://course-api.com/react-tours-project');

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
        const { id, image, info, name, price } = tour;
        return (
          <div key={id} className="tour">
            <img src={image} alt="image" className="tour__img" />
            <h5 className="tour__name">{name}</h5>
            <p className="tour__price">{price}</p>
            <p className="tour__description">{info}</p>
            <button className="btn">Not Interested</button>
          </div>
        );
      })}
    </>
  );
};

export default Tours;
