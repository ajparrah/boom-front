import React, { useState } from 'react';
// import MaskedInput from 'react-maskedinput';

const Form = () => {
  const [arrayGiven, setArrayGiven] = useState('');

  const handleChange = (e) => {
    setArrayGiven(e.target.value);
  };

  const handleSubmit = () => {
    const arrayFromText = arrayGiven.split(',');
    const arrayToSend = arrayFromText.map((item) => Number(item));
    console.log(arrayToSend);
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div>
        <h1 className="text-center">Test it</h1>
        <div>
          <div className="mb-3">
            <label htmlFor="arrayGiven" className="form-label">
              Fill it with the array.
            </label>
            <input
              type="text"
              id="arrayGiven"
              className="form-control"
              placeholder="2,4,6,7,8,9,99,64"
              onChange={handleChange}
              value={arrayGiven}
            />
            <p className="text-muted">
              NOTE: Just values separated with commas (,). This is not validated
            </p>
            <button className="btn btn-primary w-100" onClick={handleSubmit}>
              Get Find Index
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
