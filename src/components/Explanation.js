import React from 'react';
import { ReactComponent as ImageAlgorithm } from '../algorithm.svg';
import Steps from './Steps';

const Explanation = () => {
  return (
    <div className="d-flex flex-column align-items-center bg-white">
      <ImageAlgorithm style={{ width: '70%' }} />
      <div className="mb-3">
        <h1 className="text-center">Explanation of the Algorithm</h1>
        <Steps />
      </div>
    </div>
  );
};

export default Explanation;
