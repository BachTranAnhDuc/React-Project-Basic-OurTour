import React, { useEffect, useState } from 'react';
import Tours from './Tours';
import Loading from './Loading';
import Error from './Error';

const App = () => {
  const [getTours, setTours] = useState([]);
  const [isLoading, setLoading] = useState(true);
  const [isError, setError] = useState(false);

  const setTime = (times, value) => {
    setTimeout(() => {
      setLoading(value);
    }, times * 1000);
  };

  const removeTour = (id) => {
    setTours((pre) => pre.filter((el) => el.id !== id));
  };

  const fetchData = async () => {
    try {
      const res = await fetch(
        'https://raw.githubusercontent.com/BachTranAnhDuc/React-Project-Basic-OurTour/main/src/data.json'
      );

      if (res.status >= 200 && res.status <= 299) {
        const data = await res.json();

        console.log(data);

        setTime(1, false);
        setTours(data);
      } else {
        setTime(1, false);
        setError(true);
        throw new Error(res.statusText);
      }
    } catch (err) {
      console.error(`Some thing went wrong! ${err}`);
    }
  };

  const refresh = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (isLoading) {
    return (
      <div className="App">
        <div className="container">
          <Loading></Loading>
        </div>
      </div>
    );
  }

  if (isError === true) {
    return (
      <div className="App">
        <div className="container">
          <Error></Error>
        </div>
      </div>
    );
  }

  if (getTours.length === 0) {
    return (
      <div className="App">
        <div className="container">
          <h2 className="heading__secondary">There is no tour at here!</h2>
          <button className="btn-refresh" onClick={() => refresh()}>
            Refresh
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="App">
      <div className="container">
        <h2 className="heading__secondary">Our Tours</h2>
        <Tours tours={getTours} removeTour={removeTour}></Tours>
      </div>
    </div>
  );
};

export default App;
