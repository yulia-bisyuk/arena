import './App.css';
import Navbar from './components/navbar/Navbar';
import HomeSection from './components/homesection/HomeSection';
import Advantages from './components/advantages/Advantages';
import Gallery from './components/gallery/Gallery';
import Footer from './components/footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <HomeSection />
      <Advantages />
      <Gallery />
      <Footer />
    </>
  );
}

export default App;
