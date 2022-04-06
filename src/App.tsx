import React from 'react';
import { CssButton } from './components/CssButton';
import { CssModuleButton } from "./components/CssModuleButton";
import { SassModuleButton } from "./components/SassModuleButton";
import './App.css';

function App() {
  return (
    <div className="App">
      <CssButton>CssButton</CssButton>
      <CssModuleButton>CssModuleButton</CssModuleButton>
      <SassModuleButton>SassModuleButton</SassModuleButton>
    </div>
  );
}

export default App;
