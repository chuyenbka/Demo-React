import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import DemoCreatePortal from './component/DemoCreatePortal';
import DemoRef from './component/DemoRef';
import ThemeProvider from './context/ThemeProvider';
import MyTheme from './component/MyTheme';

function App() {

  const [showModal, setShowModal] =  useState(false);

  const [theme, changeTheme] = useState('black');

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
        <ThemeProvider value={
          {
            theme,
            changeTheme,
          }
        }>
          <MyTheme />
        </ThemeProvider>
      </header>
    </div>
  );
}

export default App;
