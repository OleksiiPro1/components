import React, { useReducer } from 'react';

const initialLightbulbState = { status: 'on' };

function lightbulbReducer(lightbulb, action) {
  switch (action.type) {
    case 'turnOn':
      if (lightbulb.status !== 'broken') return { status: 'on' };
      return lightbulb;
    case 'turnOff':
      if (lightbulb.status !== 'broken') return { status: 'off' };
      return lightbulb;
    case 'broken': {
      return { status: 'broken' };
    }
    default:
      throw Error('Unknown action');
  }
}

export default function StateManagementUseReducer() {
  const [lightbulb, dispatch] = useReducer(
    lightbulbReducer,
    initialLightbulbState,
  );

  return (
    <div>
      <button onClick={() => dispatch({ type: 'turnOn' })}>ON</button>
      <button onClick={() => dispatch({ type: 'turnOff' })}>OFF</button>
      <button onClick={() => dispatch({ type: 'broken' })}>BREAK</button>
      <div>Lightbulb: {JSON.stringify(lightbulb)}</div>
    </div>
  );
}
