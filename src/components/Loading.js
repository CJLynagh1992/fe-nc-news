import Spinner from 'react-spinner-material';
import React from 'react';

const Loading = () => {
  return (
    <div>
      <Spinner size={120} spinnerColor={'#333'} spinnerWidth={5} visible={true} />
    </div>
  );
};

export default Loading;
