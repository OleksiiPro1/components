import React from 'react';

export default function AsyncAwait() {
  async function fetchData(url) {
    try {
      const responce = await fetch(url);
      return responce.json();
    } catch (error) {
      console.log(error);
    }
  }
  const url = 'http://jsonplaceholder.typicode.com/posts';
  function Push() {
    // const url = 'http://jsonplaceholder.typicode.com/posts';
    fetchData(url).then((data) => {
      console.log(data);
    });
  }
  return (
    <div>
      <button onClick={Push}>PUSH</button>
      <p>{url}</p>
    </div>
  );
}
