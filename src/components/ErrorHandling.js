import React from 'react';

export default function ErrorHandling({ err }) {
  if (err)
    return (
      <div>
        <p>{err.message}</p>
      </div>
    );
}
