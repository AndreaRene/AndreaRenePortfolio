import React, { useState } from 'react';
import Header from './components/Navbar/Header';

function App() {
  const [content, setContent] = useState( 'about' );

  return (
    <div className="App">
      <Header setContent={ setContent } />
      <div>{ content }</div>
    </div>
  );
}

export default App;
