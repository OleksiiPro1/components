import React from 'react';

function LevelThree(props) {
  return <div>Level Three username: {props.username}</div>;
}

function LevelTwo(props) {
  return <LevelThree username={props.username} />;
}

function LevelOne(props) {
  return <LevelTwo username={props.username} />;
}

export default function PropDrilling() {
  const username = 'Alexey';

  return (
    <div>
      <div>top component username: {username}</div>
      <LevelOne username={username} />
    </div>
  );
}
