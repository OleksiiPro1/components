import React, { useState } from 'react';

export default function ConditionalRendering() {
  const [condition, setCondition] = useState(true);

  if (condition) {
    return (
      <div
        style={{ backgroundColor: 'white', color: 'black', padding: '30px' }}
      >
        true
        <button onClick={() => setCondition(false)}>to false</button>
      </div>
    );
  } else {
    return (
      <div
        style={{ backgroundColor: 'black', color: 'white', padding: '30px' }}
      >
        false
        <button onClick={() => setCondition(true)}>to true</button>
      </div>
    );
  }
  // return (
  //   <div>
  //     {condition ? 'true' : 'false'}{' '}
  //     <button onClick={() => setCondition(!condition)}>
  //       {condition ? 'false' : 'true'}
  //     </button>
  //   </div>
  // );
}
