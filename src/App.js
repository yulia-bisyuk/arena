import './App.css';
import Navbar from './components/navbar/Navbar';
import HomeSection from './components/homesection/HomeSection';
import Advantages from './components/advantages/Advantages';
import Gallery from './components/gallery/Gallery';
import OfficePlans from './components/office-plans/OfficePlans';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <Advantages />
      <Gallery />
      <OfficePlans />
      <Footer />
    </>
  );
}

export default App;
