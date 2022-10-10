import React, { useState } from 'react';

export default function ControlledComponent() {
  const [inputName, setInputName] = useState('Name');
  return (
    <div>
      <form
        onSubmit={(event) => {
          event.preventDefault();
        }}
      >
        <label>
          Name:{' '}
          <input
            onChange={(event) => {
              setInputName(event.currentTarget.value);
            }}
            value={inputName}
          />
        </label>
        <button
          onClick={() => {
            setInputName('Name');
          }}
        >
          Reset
        </button>
      </form>
      <p>{inputName}</p>
    </div>
  );
}
