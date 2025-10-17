import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';

function App() {
  return (
    <div>
      <Navbar/>
      <main className="main-content">
        <Login/>
      </main>
    </div>
  );
}

export default App;
