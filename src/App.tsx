import React, { useState } from 'react';
import './App.css';
import '@chatui/core/dist/index.css';
import ChatArea from './Pages/ChatArea';

const App = () => {
  return (
    <div className="App">
      <ChatArea />
    </div>
  );
};

export default App;
