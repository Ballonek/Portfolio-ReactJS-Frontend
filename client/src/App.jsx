import React, { useEffect, useState} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.scss';

import {Spinner} from 'reactstrap'

import { PageNavbar, Header, Main, Footer } from './components';
import { loadPage, loadPageWithLanguage } from './actions/cmsActions';

  
function App() {
  const [lang, setLang] = useState('en');
  const dispatch = useDispatch();
  const [langs, setLangs] = useState([]);

  useEffect(() => {   
      dispatch(loadPageWithLanguage(lang));
  }, [dispatch, lang]);

  const body = useSelector(state => state.cms.body)



  return (
    <div className="App">
      <PageNavbar nav={body.nav} lang={lang} setLang={setLang} />
      <Header />
      <Main main={body.sections} />
      <Footer />
    </div>
  );
}

export default App;
