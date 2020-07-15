import React from 'react';
import LinkCount from './LinkCount';
import LinkInput from './LinkInput';
import LinkBoard from './LinkBoard';

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
      <div className="dashboard_board">
        <LinkBoard />
      </div>
    </div>
  );
};

export default index;
