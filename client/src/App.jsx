import React from 'react';
import './App.scss';

import { PageNavbar, Header, Main, Footer } from './components';

function App() {
  return (
    <div className="App">
      <PageNavbar />
      <Header />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
