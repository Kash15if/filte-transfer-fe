import React, { useState, useEffect } from 'react';
import Card from '../Components/Home/Card';
import FilterBar from '../Components/Home/FilterBar';
import Form from '../Components/Form/Form';

const Home = () => {
  const [len, setLen] = useState([]); // Initialize with an empty array

  useEffect(() => {
    const arr = [];

    for (let i = 0; i < 10; i++) {
      arr.push(<Card key={i} />); // Assign a key to each Card
    }

    setLen(arr);
  }, []);

  return <>
  <FilterBar/>

  {len.length > 0 ? (

    len.map((item, index) => <div key={index}>{item}</div>)
  ) : (
    <div>No items to display</div>
  )
}</>
};

export default Home;
