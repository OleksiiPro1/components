import { useState } from 'react';

function ResetButton(props) {
  return (
    <button
      onClick={() => {
        props.setInputName('Name');
      }}
    >
      Reset
    </button>
  );
}

function Form(props) {
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
      }}
    >
      <label>
        Name:{' '}
        <input
          onChange={(event) => {
            props.setInputName(event.currentTarget.value);
          }}
          value={props.inputName}
        />
      </label>
    </form>
  );
}

export default function ListingStateUp() {
  const [inputName, setInputName] = useState('Name');
  return (
    <div>
      <p>{inputName}</p>
      <Form inputName={inputName} setInputName={setInputName} />
      <ResetButton setInputName={setInputName} />
    </div>
  );
}
