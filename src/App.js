import React, { useState } from 'react';
import About from './components/about/About';
import Container from './components/container/Container';
import HeroImage from './components/heroImage/HeroImage';
import PageContent from './components/pageContent/PageContent';
import TopBar from './components/topBar/TopBar';

import "./App.css";
import Gallery from './components/gallery/Gallery';
import Contacts from './components/contacts/Contacts';

const App = () => {
  const [slideNum, setSlideNum] = useState(0);

  function handleSlideNum(num) {
    if (num > 2) {
      setSlideNum(0);
    } else if (num < 0) {
      setSlideNum(2);
    } else setSlideNum(num);
  }

  return (
    <div className="App">
    <Container>
      <TopBar/>
      <div className="app__top">
    <HeroImage slideNum={slideNum} handleSlideNum={handleSlideNum} />
    <PageContent slideNum={slideNum} handleSlideNum={handleSlideNum} />
    </div>
    <Gallery />
    <About/>
    <Contacts />
    </Container>
    </div>
  );
}

export default App;