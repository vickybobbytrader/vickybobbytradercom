import React from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/home/Hero';
import { Features } from './components/home/Features';
import { Courses } from './components/courses/Courses';
import { Testimonials } from './components/home/Testimonials';
import { Contact } from './components/contact/Contact';

function App() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Features />
        <Courses />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;