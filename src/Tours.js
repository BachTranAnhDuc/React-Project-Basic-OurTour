import React, { useEffect, useState } from 'react';
import Tour from './Tour';

const Tours = (props) => {
  const { tours, removeTour } = props;

  return (
    <>
      {tours.map((tour) => {
        return <Tour key={tour.id} {...tour} removeTour={removeTour}></Tour>;
      })}
    </>
  );
};

export default Tours;
