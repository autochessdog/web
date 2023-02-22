import './App.css';
import { NavBar } from './navbar';
import { Contenti } from './content';
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <NavBar />
      <Contenti/>
      </header>
    </div>
  );
}

export default App;
