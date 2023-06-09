
import Footer from './Components/Footer';
import About from './Components/About';
import Header from './Components/Header';
import NavBar from './Components/NavBar';
import Portafolio from './Components/Portafolio';
import './reset.css';
import Services from './Components/Services';
import Price from './Components/Price/'



function App() {
  return (
    <div>   
      <Header />
      <Portafolio />
      <NavBar />
      <About />
      <Services />
      <Price />
      <Footer />
    </div>
  );
}

export default App;
