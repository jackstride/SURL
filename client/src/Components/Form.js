import React from 'react';

const Form = ({ children, handleSubmit }) => {
  return (
    <div className="form_container">
      <form onSubmit={handleSubmit}>{children}</form>
    </div>
  );
};

export default Form;
