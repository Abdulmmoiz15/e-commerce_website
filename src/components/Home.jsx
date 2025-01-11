import React from 'react';
import Header from '/src/components/Header';
import Navbar from '/src/components/Navbar';
import Main from '/src/components/Main';
import Salepage from '/src/components/Salepage';
import Pro1 from '/src/components/Pro1';
import Pro2 from '/src/components/Pro2';
import Recommend from '/src/components/Recommend';
import Services from '/src/components/Services';
import Supply from '/src/components/Supply';
import Footer from '/src/components/Footer';
import Cart from '/src/components/Cart';
import Mobheader from '/src/components/Mobheader'

function Home() {
  return (
    <>
    <Mobheader />
    <Header />
    <Navbar />
    <Main />
    <Salepage />
    <Pro1/>
    <Pro2/>
    <Recommend/>
    <Services/>
    <Supply/>
    <Footer/>
    <Cart/>


    </>
  );
}

export default Home;
