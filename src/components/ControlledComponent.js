import { useState } from 'react';

export default function ControlledComponent() {
  const [inputName, setInputName] = useState('Name');
  return (
    <div>
      <label>
        Name:{' '}
        <input
          onChange={(event) => {
            setInputName(event.currentTarget.value);
          }}
          value={inputName}
        />
      </label>
      <p>{inputName}</p>
    </div>
  );
}
