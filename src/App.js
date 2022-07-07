
import './App.css';



import Nav from './componentes/nav/Nav';
import Home from './componentes/home/Home';
import Work from './componentes/work/Work';
import Contact from './componentes/contact/Contact';
import About from './componentes/about/About';


function App() {
  return (
    <div>
      <Nav/>
      <Home/>
      <Work/>
      <About/>
      <Contact/>
    </div>
  );
}
export default App;
