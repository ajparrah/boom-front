import React from 'react';
import Explanation from './components/Explanation';
import Form from './components/Form';
import './styles/App.css';

function App() {
  return (
    <div className="app_container d-flex justify-content-center align-items-center">
      <div className="container d-flex flex-column justify-content-center bg-white pb-3">
        <Explanation />
        <Form />
      </div>
    </div>
  );
}

export default App;
