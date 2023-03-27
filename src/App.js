import './App.css';
import Navbar from './components/navbar/Navbar';
import HomeSection from './components/homesection/HomeSection';
import Advantages from './components/advantages/Advantages';
import Gallery from './components/gallery/Gallery';
import OfficePlans from './components/office-plans/OfficePlans';
import Footer from './components/footer/Footer';
import {useTranslation} from 'react-i18next';
import React, {useEffect, useState} from 'react';
import {RotatingLines} from 'react-loader-spinner';

function App() {
  
  const {t, i18n} = useTranslation();
  const changeLanguage = (language) => {
    i18n.changeLanguage(language);
  }
  
  const [bgImg, setBgImg] = useState('');
  useEffect(() => {
    fetch('/images/top-bg.jpg')
      .then(response => response.blob())
      .then((image) => {
        setBgImg(URL.createObjectURL(image));
      });
  }, []);
  
  return (
    <>
      {bgImg
        ?
        (<>
            <Navbar changeLanguage={changeLanguage} />
            <HomeSection bgImg={`url(${bgImg})`}/>
            <Advantages/>
            <Gallery/>
            <OfficePlans/>
            <Footer/>
          </>
        )
        :
        (<div className="loader-wrapper">
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="1.75"
              width="96"
              visible={true}
            /></div>
        )}
    </>
  );
}

export default App;
