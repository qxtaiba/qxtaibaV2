import React from 'react';
import Terminal from './components/Terminal'; // Import the Terminal component
import logo from './logo.svg';
import GlobalStyle from "./components/styles/GlobalStyle";

function App() {
  return (
    <>
      <h1 className="sr-only" aria-label="Terminal Portfolio">
        Terminal Portfolio
      </h1>
          <GlobalStyle />
            <Terminal />
    </>
  );
}

export default App;
