
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/css/Menu.css";
import Menu from './components/Menu';
import Price from "./pages/Price"
import Home from "./pages/Home";
import About from './pages/About';
import ContactForm from './components/form/ContactForm';
import Team from './pages/Team';
// import About from './pages/About';
// import About from './pages/About';


function App() {
  return (
    <div>
      <Menu />
      <Home />
      <Price />
      <About />
      <Team />
      <ContactForm />
    </div>
  );
}

export default App;
