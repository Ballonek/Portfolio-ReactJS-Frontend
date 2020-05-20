import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import './App.scss';

import { PageNavbar, Header, Main, Footer } from './components';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { loadPage } from './actions/cmsActions';

  
function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    Aos.init({ duration: 3000 });
    dispatch(loadPage());
  }, [dispatch]);
    
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
