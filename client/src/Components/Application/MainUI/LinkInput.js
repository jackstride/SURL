import React, { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useForm from '../../../hooks/useForm';
import { connect } from 'react-redux';
import { addURL } from '../../../Actions/urlActions';

const LinkInput = ({ addURL, user_id }) => {
  const [values, handleChange] = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!values.protocol) {
      values.protocol = e.target.protocol.value;
    }
    values.url = handleInputURL(values.url);
    values._id = user_id;
    addURL(values);
  };

  const handleInputURL = (url) => {
    if (url.includes('http:') || url.includes('https')) {
      return url;
    } else {
      return values.protocol + url;
    }
  };
  return (
    <form method="post" className="links" onSubmit={handleSubmit}>
      <div className="main_link">
        <FontAwesomeIcon icon="angle-down" color="red" size="1x" />
        <select name="protocol" onChange={handleChange}>
          <option value="http://">http://</option>
          <option value="https://">https://</option>
        </select>
        <input
          type="text"
          name="url"
          onChange={handleChange}
          value={values.url || ''}
          placeholder="Enter your url"
        />
      </div>
      <h5> Custom:</h5>
      <input
        onChange={handleChange}
        type="text"
        name="slug"
        placeholder="Enter Slug"
        value={values.slug || ''}
      />
      <div className="link_submit">
        <FontAwesomeIcon icon="check" size="1x" />
        <input type="submit" name="submit" value="" />
      </div>
    </form>
  );
};

const mapStateToPrps = (state) => {
  return {
    user_id: state.auth.user._id,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addURL: (values) => dispatch(addURL(values)),
  };
};
export default connect(mapStateToPrps, mapDispatchToProps)(LinkInput);
