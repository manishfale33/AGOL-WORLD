import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Carousel from './components/Carousel';
import Industries from './components/Industries';
import { CardProvider, Card } from './components/Static';

function App() {
  return (
    <CardProvider>
      <div>
        <div className='min-h-[100vh]'>
          {/* Navbar */}
          <Navbar />
          {/* Hero */}
          <Hero />
          {/* About */}
          <About />
          <div>
            {/* Static Cards  */}
            <div className="flex flex-wrap justify-center">
              <Card title="Screened Couriers" icon="user" initialCount={0} incrementValue={569} />
              <Card title="Countries Reached" icon="globe" initialCount={0} incrementValue={89} />
              <Card title="Agent & Customs Brokers" icon="building" initialCount={0} incrementValue={179} />
              <Card title="Offices Worldwide" icon="flag" initialCount={0} incrementValue={4} />
            </div>
          </div>
          <div>
            <Services/>
          </div>
        </div>
        <Carousel/>
        <Industries/>
        {/* Footer */}
        <Footer />
      </div>
    </CardProvider>
  );
}

export default App;