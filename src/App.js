import logo from './logo.svg';
import './App.css';
import ContactoEstadoComponent from './components/pure/contacto-estado';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      <ContactoEstadoComponent></ContactoEstadoComponent>
      </header>
    </div>
  );
}

export default App;
