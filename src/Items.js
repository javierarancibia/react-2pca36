import React, { useState, useEffect } from 'react';

const Items = () => {
  const [bool, setBool] = useState(false);
  const [number, setNumber] = useState('Loading');

  useEffect(() => {
    setTimeout(() => {
      bool ? setNumber(1) : setNumber(2);
    }, 2000);
  }, [bool]);

  return <div className="mt-5">{number}</div>;
};

export default Items;
