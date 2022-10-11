import React, { useEffect, useState } from 'react';

export default function DerivingState() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [positiveValues, setPositiveValues] = useState([]);

  useEffect(() => {
    if (count1 >= 0 && count2 >= 0) {
      setPositiveValues([count1, count2]);
    } else if (count1 < 0 && count2 >= 0) {
      setPositiveValues([count2]);
    } else if (count1 >= 0 && count2 < 0) {
      setPositiveValues([count1]);
    } else if (count1 < 0 && count2 < 0) {
      setPositiveValues([]);
    }
  }, [count1, count2]);

  return (
    <div>
      <div>{count1}</div>
      <button onClick={() => setCount1(count1 + 1)}>+</button>
      <button onClick={() => setCount1(count1 - 1)}>-</button>
      <div>{count2}</div>
      <button onClick={() => setCount2(count2 + 1)}>+</button>
      <button onClick={() => setCount2(count2 - 1)}>-</button>
      <div>Positive values: {positiveValues.join(', ')}</div>
    </div>
  );
}
