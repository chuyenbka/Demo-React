import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import DemoCreatePortal from './component/DemoCreatePortal';
import DemoRef from './component/DemoRef';

function App() {

  const [showModal, setShowModal] =  useState(false);

  const closeModal = () => {
    setShowModal(false);
  }

  const openModal = () => {
    setShowModal(true);
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={openModal}> Show Modal </button>
        {showModal && <DemoCreatePortal handleCloseModal={closeModal}> Noi dung modal </DemoCreatePortal>}
        <DemoRef />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
