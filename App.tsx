
import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';

const App: React.FC = () => {
  return (
    <div className="bg-black min-h-screen text-gray-100 antialiased">
      <Header />
      <main>
        <Hero />
      </main>
    </div>
  );
};

export default App;
