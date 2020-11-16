import React from 'react';
import logo from './logo.svg';
import { Editor } from './components/Editor';
import { Preview } from './components/Preview';
import './App.css';

function App() {
  return (
    <div id="myApp">
      <Editor />
      <Preview />
    </div>
  );
}

export default App;