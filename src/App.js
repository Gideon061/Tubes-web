import './App.css';
import AboutUs from './Components/AboutUs';
import Bottom from './Components/Bottom';
import ChefChoice from './Components/ChefChoice';
import Footer from './Components/Footer';
import Hero from './Components/Hero';
import Menu from './Components/Menu/Menu';
import Nav from './Components/Nav';
import Reservation from './Components/Reservation';

function App() {
  return (
    <div>
      <Nav />
      <Hero/>
      <Reservation />
      <AboutUs />
      <Menu />
      <ChefChoice />
      <Bottom />
      <Footer />
    </div>
  );
}

export default App;
