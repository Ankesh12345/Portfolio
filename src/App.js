
import './App.css';
import Home from './component/Home';
import {Navbar} from './component/Navbar';
import Socialinks from './component/Socialinks';
import About from './component/About';
import Portfolio from './component/Portfolio';
import Experience from './component/Experience';
import Contact from './component/Contact';

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Socialinks/>
      <About/>
      <Portfolio/>
      <Experience/>
      <Contact/>
    </>
   
  );
}

export default App;
