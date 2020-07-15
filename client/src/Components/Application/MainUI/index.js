import React from 'react';
import LinkCount from './LinkCount';
import LinkInput from './LinkInput';

const index = () => {
  return (
    <div className="dashboard_container">
      <div className="h_logo">
        <h3>surl.</h3>
      </div>
      <div className="dashboard_row">
        <LinkCount />
        <LinkInput />
      </div>
    </div>
  );
};

export default index;
