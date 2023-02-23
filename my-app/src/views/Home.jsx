import React from "react";
import Navbar from "../component/Navbar";
import Card from "../component/Card";
import Footer from "../component/Footer";

function Home() {
  return (
    <>
      <div
        class="box-border 
.m-0	margin: 0;		copy
.m-0.5	margin: 0.125rem;"
      >
        <Navbar />
        <Card />
        <Footer />
      </div>
    </>
  );
}

export default Home;
