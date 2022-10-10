import React from 'react';

function ChildrenComponent(props) {
  return <div>{props.children}</div>;
}

export default function ChildrenPropExample() {
  return (
    <>
      <h2>My parent title</h2>
      <ChildrenComponent>
        <h3>My Title</h3>
        <p>This is some text</p>
      </ChildrenComponent>
    </>
  );
}
