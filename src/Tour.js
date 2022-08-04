import React, { useState } from 'react';

const Tour = (props) => {
  const { id, image, info, price, name, removeTour } = props;

  const [readMore, setReadMore] = useState(false);

  return (
    <>
      <figure key={id} className="tour">
        <img src={image} alt="image" className="tour__img" />
        <figcaption className="tour__detail">
          <h5 className="tour__name">{name}</h5>
          <p className="tour__price">${price}</p>
          <p className="tour__description">
            {readMore ? info : `${info.substring(0, 200)}....  `}
            <button
              className="btn__read-more"
              onClick={() => setReadMore(!readMore)}
            >
              {!readMore ? 'Read More' : 'Show Less'}
            </button>
          </p>
          <button className="btn" onClick={() => removeTour(id)}>
            Not Interested
          </button>
        </figcaption>
      </figure>
    </>
  );
};

export default Tour;
