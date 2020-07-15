import React from 'react';
import { connect } from 'react-redux';

const CountLinks = ({ count }) => {
  return (
    <div className="link_count">
      <h5>
        Links<span>{count}</span>
      </h5>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    count: state.urls.urls.length,
  };
};

export default connect(mapStateToProps, null)(CountLinks);
