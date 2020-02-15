import React from 'react';

const Spinner = props => {
  return (
    <div className="ui segment" style={{ width: '100%', height: '100vh' }}>
      <div className="ui active dimmer">
        <div className="ui text loader">{props.message}</div>
      </div>
    </div>
  );
};

Spinner.defaultPorps = {
  message: 'Loading...'
};

export default Spinner;
