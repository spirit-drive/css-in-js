import * as React from 'react';
import { CssExample } from './components/CssExample';
import { CssModuleExample } from "./components/CssModuleExample";
import { SassModuleExample } from "./components/SassModuleExample";
import { EmotionExample } from "./components/EmotionExample";
import './App.css';

function App() {
  return (
    <div className="app">
      <CssExample>CssExample</CssExample>
      <CssModuleExample>CssModuleExample</CssModuleExample>
      <SassModuleExample>SassModuleExample</SassModuleExample>
      <EmotionExample>EmotionExample</EmotionExample>
    </div>
  );
}

export default App;
