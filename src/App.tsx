/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import Ride from './pages/Ride';
import Services from './pages/Services';
import TukTukService from './pages/TukTukService';
import Drive from './pages/Drive';
import About from './pages/About';
import Contact from './pages/Contact';
import Help from './pages/Help';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import Refund from './pages/Refund';
import Cancellation from './pages/Cancellation';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-white text-[#14243A] font-sans antialiased selection:bg-[#FFD21F] selection:text-[#08264A] overflow-x-clip">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ride" element={<Ride />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services/tuktuk" element={<TukTukService />} />
            <Route path="/drive" element={<Drive />} />
            <Route path="/partners" element={<Drive />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/help" element={<Help />} />
            <Route path="/faq" element={<Help />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/refund" element={<Refund />} />
            <Route path="/cancellation" element={<Cancellation />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
