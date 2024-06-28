
import './CostumeStyle.css';
import Home from './pages/Home.tsx';
import NavMenu from './components/NavMenu/NavMenu.tsx';
import Header from './components/Header/Header.tsx';

function App() {
  return (
    <div className="App">
      <Header />
      {/* <NavMenu/> */}
      <Home/>
    </div>
  );
}

export default App;
