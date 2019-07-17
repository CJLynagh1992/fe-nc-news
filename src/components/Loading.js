import Spinner from 'react-spinner-material';
import React from 'react';

export default class Loading extends React.Component {
  render() {
    return (
      <div>
        <Spinner size={120} spinnerColor={'#333'} spinnerWidth={5} visible={true} />
      </div>
    );
  }
}
