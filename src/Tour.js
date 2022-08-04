import React from 'react';

const Tour = (props) => {
  const { id, image, info, price, name } = props;
  return (
    <>
      <figure key={id} className="tour">
        <img src={image} alt="image" className="tour__img" />
        <figcaption className="tour__detail">
          <h5 className="tour__name">{name}</h5>
          <p className="tour__price">${price}</p>
          <p className="tour__description">{info}</p>
          <button className="btn">Not Interested</button>
        </figcaption>
      </figure>
    </>
  );
};

export default Tour;
