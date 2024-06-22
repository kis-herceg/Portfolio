
import './CostumeStyle.css';
import Home from './pages/Home.tsx';
import NavMenu from './components/NavMenu/NavMenu.tsx';

function App() {
  return (
    <div className="App">
      <NavMenu/>
      <Home/>
    </div>
  );
}

export default App;
