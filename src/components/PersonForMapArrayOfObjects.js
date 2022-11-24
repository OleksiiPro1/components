import React from 'react';
import DataForArrayOfObjects from './DataForArrayOfObjects';

export default function PersonForMapArrayOfObjects(props) {
  const { firstName, lastName, email, img } = props;
  return (
    <div>
      <img src={img} />
      <h3>
        {firstName} {lastName}
      </h3>
      <h3>{email}</h3>
    </div>
  );
}
