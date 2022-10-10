import { useState } from 'react';

export default function UpdatedTitle() {
  const [title, setTitle] = useState('first title');
  const [count, setCount] = useState(false);

  return (
    <div>
      <h2>
        {title} {count}
      </h2>
      <button
        onClick={(event) => {
          setTitle('Updated title');
          setCount(count + 1);
        }}
      >
        Click me to update
      </button>
    </div>
  );
}
