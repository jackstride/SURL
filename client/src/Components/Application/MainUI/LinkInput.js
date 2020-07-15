import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const LinkInput = (props) => {
  return (
    <form className="links">
      <div className="main_link">
        <FontAwesomeIcon icon="angle-down" color="red" size="x1" />
        <select>
          <option value="http">http://</option>
          <option value="https">https://</option>
        </select>
        <input type="text" name="link" placeholder="Enter your url" />
      </div>
      <h5> Custom:</h5>
      <input type="text" name="slug" placeholder="Enter Slug" />
      <div className="link_submit">
        <FontAwesomeIcon icon="check" size="1x" />
        <input type="submit" name="submit" value="" />
      </div>
    </form>
  );
};

export default LinkInput;
