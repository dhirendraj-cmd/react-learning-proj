import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import { ThemeProvider } from './context/theme';
import { useState, useEffect } from 'react';

function App() {

  const [themeMode, setThemeMode] = useState("lightgray")

  const darkMode = () => {
    setThemeMode("dark");
  }

  const lightMode = () => {
    setThemeMode("lightgray");
  }


  useEffect(() => {
    document.querySelector("html").classList.remove("lightgray", 'dark');
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode])
  

  return (
    <ThemeProvider value={{themeMode, darkMode, lightMode}}>
      <div>
        <Navbar/>
        <main className="main-content">
          <Login/>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default App;
