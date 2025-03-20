import React from "react";
import Navbar from "./NavbarFooter/navbar";
import Footer from "./NavbarFooter/footer";
import { Link } from "react-router-dom";
import ImageButton from "./components/ImageButton";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="home-container" style={{ backgroundColor: 'white', display: 'flex', flexDirection: 'column', alignItems: 'center', paddingTop: '10px'}}>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '80vw', height: '40vh' }}>
          <h1 style={{ fontSize: '48vw', fontFamily: 'Montserrat', letterSpacing: '-0.12em', margin: '0', color: 'black' }}>mobily</h1>
        </div>
        <p>Explore the latest mobile phone reviews and specifications.</p>
        <Link to="/mobile-specs">View Mobile Specifications</Link>
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%' }}>
          <ImageButton imageSrc="https://via.placeholder.com/300" date="10 MARCH" text="Review" width="300px" />
          <ImageButton imageSrc="https://via.placeholder.com/350" date="15 APRIL" text="Specs" width="350px" />
        </div>
        {/* New Buttons Section */}
        <div style={{ display: 'flex', justifyContent: 'space-around', width: '100%', marginTop: '20px' }}>
          <Link to="/reviews" className="button">Reviews</Link>
          <Link to="/contact" className="button">Contact</Link>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;