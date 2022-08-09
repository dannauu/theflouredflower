import './App.css';
import HeroBanner from './components/HeroBanner/HeroBanner';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import HomepageMain from './components/HomepageMain/HomepageMain';

function App() {
  return (
    <>
      <Navigation />
      <HeroBanner />
      <HomepageMain />
      <Footer />
    </>
  );
}

export default App;
