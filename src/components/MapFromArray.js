import React from 'react';

const DUMMY_DATA = [
  { id: '1', title: '111text1' },
  { id: '2', title: '222text2' },
  { id: '3', title: '333text3' },
];

function MapFromArray() {
  return (
    <selection>
      <h2>All Meetups</h2>
      <ul>
        {DUMMY_DATA.map((meetup) => {
          return <li key={meetup.id}>{meetup.title}</li>;
        })}
      </ul>
    </selection>
  );
}

export default MapFromArray;
