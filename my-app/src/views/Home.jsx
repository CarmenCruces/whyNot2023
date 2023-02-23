import React from 'react';
import Navbar from "../component/Navbar";
import Card from "../component/Card";
import Footer from "../component/Footer";
import Carrousel from "../component/Carrousel";

function Home() {
  return (
    <>
    <Navbar />
    <Carrousel />
      <div className = 'main'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
      <Footer />
    </>
  );
}

export default Home;
