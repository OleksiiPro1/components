/** @jsxImportSource @emotion/react */
import { css } from '@emotion/react';
import { useState } from 'react';

const falseDiv = css`
  background-color: black;
  color: white;
  padding: 30px;
`;
const trueDiv = css`
  background-color: white;
  color: black;
  padding: 30px;
`;
export default function ConditionalRendering() {
  const [condition, setCondition] = useState(true);

  if (condition) {
    return (
      <div css={trueDiv}>
        true
        <button onClick={() => setCondition(false)}>to false</button>
      </div>
    );
  } else {
    return (
      <div css={falseDiv}>
        false
        <button onClick={() => setCondition(true)}>to true</button>
      </div>
    );
  }
  // return (
  //   <div>
  //     {condition ? 'true' : 'false'}{' '}
  //     <button onClick={() => setCondition(!condition)}>
  //       {condition ? 'false' : 'true'}
  //     </button>
  //   </div>
  // );
}
