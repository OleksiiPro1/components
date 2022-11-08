import React from 'react';
import { useRouter } from 'react/router';

export default function HideElements() {
  const router = useRouter();
  return (
    <div>
      <div>
        <p>Show elements</p>
      </div>
      {router.pathname !== '/sign_up' && (
        <div>
          <p>Hide elements</p>
        </div>
      )}
    </div>
  );
}
// npm i react-router
