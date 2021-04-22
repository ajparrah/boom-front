import React, { useState } from 'react';
import { getFindIndex } from '../api/findIndex';
import { isArrayOfNumbersOnly } from '../helpers/isArrayOfNumbersOnly';
import Spinner from './Spinner';

const Form = () => {
  const [arrayGiven, setArrayGiven] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({
    value: false,
    msg: 'An error has occurred',
  });
  const [indexFound, setIndexFound] = useState(null);

  const handleChange = (e) => {
    setArrayGiven(e.target.value);
  };

  const handleSubmit = async () => {
    try {
      setError((prevState) => ({ ...prevState, value: false }));
      const arrayFromText = arrayGiven.split(',').map((item) => item.trim());
      const arrayInNumber = arrayFromText.map((item) => Number(item));
      if (isArrayOfNumbersOnly(arrayInNumber)) {
        setIsLoading(true);
        const findIndex = await getFindIndex(arrayInNumber);
        setIndexFound(findIndex);
      } else {
        setError({
          value: true,
          msg: 'All items must be integer',
        });
      }
    } catch (error) {
      console.log('Error sending array');
      setError((prevState) => ({ ...prevState, msg: 'An error has occurred' }));
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="d-flex flex-column align-items-center">
      <div>
        <h1 className="text-center">Test it</h1>
        <div className="mb-3">
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

        {isLoading && <Spinner />}
        {indexFound && !error.value && (
          <p>
            The answer is <strong>{indexFound}</strong>
          </p>
        )}
        {error.value && !isLoading && (
          <p>
            <strong>{error.msg}</strong>
          </p>
        )}
      </div>
    </div>
  );
};

export default Form;
