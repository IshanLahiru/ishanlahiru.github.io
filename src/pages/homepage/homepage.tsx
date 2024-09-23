import React, { useEffect, useState } from 'react';
import './style.css';

const Home = () => {

  return (
    <div className="container">
      <header className="header">Header</header>
      <aside className="left-aside">Left</aside>
      <main className="main">
        <h3>Main</h3>
      </main>
      <section className="banner">Banner</section>
      <aside className="right-aside">Right</aside>
      <section className="low-content">Low</section>
      <footer className="footer">Footer</footer>
    </div>
  );
};

export default Home;
