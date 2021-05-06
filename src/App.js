import React, { useEffect, useState } from 'react';
import mockData from './mock.data';
import Header from './components/header';
import Card from './components/card';
import FooterButton from './components/footer';

import './App.css';

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    setTimeout(() => {
      setData(mockData);
    }, 1500);
  }, []);

  if (!data) return null;

  return (
    <div className="App">
      <Header />
      <div className="body">
        <div className="heading">
          <span>Newest Job Offers</span>
          <span className="heading-link">View all job offers ➜</span>
        </div>
        <div className="item-list">
          {data.jobOffers.map((offer, index) => (
            <Card offer={offer} key={index} />
          ))}
        </div>
        <div className="footer-container">
          <div className="heading">Featured Companies</div>
          <div className="item-list">
            {data.featuredCompanies.map((comp) => (
              <FooterButton name={comp} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
