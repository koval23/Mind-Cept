
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/css/Menu.css";
import Menu from './components/Menu';
import Diagram from "./pages/Diagram"
import Price from "./pages/Price"
import Home from "./pages/Home";
import ContactForm from './components/form/ContactForm';
import Team from './pages/Team';
// import About from './pages/About';


function App() {
  return (
    <div>
      <Menu />
      <Home />
      <Price />
      <Diagram />
      {/* <About /> */}
      <Team />
      <ContactForm />
    </div>
  );
}

export default App;
