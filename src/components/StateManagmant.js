import React, { useState } from 'react';

export default function StateManagmant() {
  const [lightBubl, setLightBubl] = useState({ status: 'on' });
  return (
    <div>
      <button
        onClick={() =>
          setLightBubl(
            lightBubl.status !== 'broken'
              ? { status: 'on' }
              : { status: 'broken' },
          )
        }
      >
        ON
      </button>
      <button onClick={() => setLightBubl({ status: 'off' })}>OFF</button>
      <button onClick={() => setLightBubl({ status: 'broken' })}>BREAK</button>
      <div>LightBubl: {JSON.stringify(lightBubl)}</div>
    </div>
  );
}
