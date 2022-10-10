import { useState } from 'react';

export default function UpdatedTitle() {
  const [title, setTitle] = useState('first title');
  const [count, setCount] = useState(false);
  function titleAndCount() {
    setTitle('Updated title');
    setCount(count + 1);
  }
  return (
    <div>
      <p>
        {title} {count}
      </p>
      <button
        onClick={(event) => {
          titleAndCount();
        }}
      >
        Click me to update
      </button>
    </div>
  );
}
