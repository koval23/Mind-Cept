
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../src/css/Menu.css";
import Menu from './components/Menu';
import Home from "./pages/Home";
import "./css/MyContainer.css"



function App() {
  return (
    <div>
      <Menu />
      <Home />
    </div>
  );
}

export default App;
