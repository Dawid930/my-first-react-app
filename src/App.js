import logo from './logo.svg';
import './App.css';
import Button from './components/button/button'

const text = "Valami szoveg"

function App() {
  return (
    <div className="App">
      <Button />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {text}
        </p>
        <p>Masik kiraly szoveg</p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
