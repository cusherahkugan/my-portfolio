import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Portfolio from './components/Portfolio'; 
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
      <Portfolio />

      </main>
      <footer className="bg-blue-500 text-white p-4 text-center">
        <p>&copy; 2024 Cusherah Kuagnanthan</p>
      </footer>
    </div>
  );
}

export default App;
