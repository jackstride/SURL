import React from 'react';

const LinkInput = (props) => {
  return (
    <form className="links">
      <div className="main_link">
        <select>
          <option value="http">http</option>
          <option value="https">https</option>
        </select>
        <input type="text" name="link" />
      </div>

      <input type="text" name="slug" />
    </form>
  );
};

export default LinkInput;
