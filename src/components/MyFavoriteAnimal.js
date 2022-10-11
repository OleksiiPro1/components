import React, { useState } from 'react';

const animalsArray = [
  {
    name: 'turtle',
    size: '1m',
    age: 20,
    isFavorite: false,
    id: 1,
  },
  {
    name: 'lion',
    size: '3m',
    age: 10,
    isFavorite: false,
    id: 2,
  },
  {
    name: 'zebra',
    size: '2m',
    age: 12,
    isFavorite: false,
    id: 3,
  },
];

export default function MyFavoriteAnimal() {
  const [animals, setAnimals] = useState(animalsArray);

  return (
    <>
      {animals.map((animal) => {
        return (
          <div
            key={animal.id}
            style={{
              backgroundColor: 'black',
              color: 'white',
              width: '50%',
              margin: '5px',
            }}
          >
            <p>name: {animal.name}</p>
            <p> size: {animal.size}</p>
            <p> age: {animal.age}</p>
            <p>
              {' '}
              <input
                // value={false}
                type="checkbox"
                checked={animal.isFavorite}
                onChange={(event) => {
                  setAnimals(
                    animals.map((animalObject, index) => {
                      if (animalObject.id === animal.id) {
                        animalObject.isFavorite = !animalObject.isFavorite;
                      }

                      return animalObject;
                    }),
                  );
                }}
              />
              {animal.isFavorite ? 'yes' : 'no'}
            </p>
          </div>
        );
      })}
    </>
  );
}
