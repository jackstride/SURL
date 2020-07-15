import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { connect } from 'react-redux';
import { getAllUrls, deleteURL } from '../../../Actions/urlActions';
const moment = require('moment');

const LinkBoard = ({ getAllUrls, links, deleteURL }) => {
  const [values, setValues] = useState([]);

  useEffect(() => {
    getAllUrls();
  }, [getAllUrls]);

  const handleDelete = (e) => {
    e.preventDefault();
    deleteURL(values);
  };

  return (
    <div className="link_board_container">
      <form method="delete" onSubmit={handleDelete}>
        <div className="submit">
          <input type="submit" name="submit" value="Remove" />
          <FontAwesomeIcon icon="times" color="white" size="sm" />
        </div>
        {links.map((item, i) => (
          <Item setValues={setValues} values={values} key={i} data={item} />
        ))}
      </form>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    getAllUrls: () => dispatch(getAllUrls()),
    deleteURL: (values) => dispatch(deleteURL(values)),
  };
};
const mapStateToProps = (state) => {
  return {
    links: state.urls.urls,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LinkBoard);

const Item = ({ data, setValues, values }) => {
  return (
    <div className="link_item">
      <input
        onChange={() => {
          setValues([...values, data._id]);
        }}
        name="selected"
        type="checkbox"
      />
      <a href={data.url}>{`https://slur.co/${data.slug}`}</a>
      <a href={data.url}>{`${data.url}`}</a>
      <p>{`Created: ${moment(data.date).format('MMM Do YYYY')}`}</p>
      <button className={data.isEnabled ? 'link_enabled' : 'link_disabled'}>
        {data.isEnabled ? 'Enabled' : 'Disabled'}
      </button>
    </div>
  );
};
