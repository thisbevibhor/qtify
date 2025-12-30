import React from 'react';
import Navbar from './components/NavBar/NavBar.jsx';
import Hero from './components/Hero/Hero';
import Section from './components/GridSection/GridSection.jsx';
import './App.css'; 

// Define the API endpoint
const TOP_ALBUMS_API = "https://qtify-backend.labs.crio.do/albums/top";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
        <div style={{ padding: '30px' }}> {/* Add padding to body content */}
        <Section title="Top Albums" dataSource={TOP_ALBUMS_API} />
      </div>
    </div>
  );
}

export default App;