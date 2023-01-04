import React from 'react';
import DataForArrayOfObjects from './DataForArrayOfObjects';
import PersonForMapArrayOfObjects from './PersonForMapArrayOfObjects';

// https://www.mockaroo.com/

export default function MapArrayOfObjects() {
  return (
    <div>
      {DataForArrayOfObjects.map((person) => {
        const { id, firstName, lastName, email, img } = person;
        return (
          <PersonForMapArrayOfObjects
            // id={id}
            // firstName={firstName}
            // lastName={lastName}
            // email={email}
            // img={img}
            key={person.id}
            {...person}
          />
        );
      })}

      <PersonForMapArrayOfObjects />
    </div>
  );
}
