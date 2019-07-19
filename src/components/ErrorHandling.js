import React from 'react';

export default function ErrorHandling({ err }) {
  if (err)
    return (
      <div>
        <p>{err.message}</p>
      </div>
    );
  else return <p>The page you're looking for can not be found...</p>;
}
