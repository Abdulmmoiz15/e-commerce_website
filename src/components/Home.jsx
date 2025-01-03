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

function Home() {
  return (
    <div className="container-fluid p-0">
      {/* Header */}
      <Header />

      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main className="mt-4">
        {/* Main Section */}
        <section className="mb-4">
          <Main />
        </section>

        {/* Sale Page Section */}
        <section className="mb-4">
          <Salepage />
        </section>

        {/* Product Sections */}
        <section className="mb-4">
          <Pro1 />
        </section>
        <section className="mb-4">
          <Pro2 />
        </section>

        {/* Recommendations */}
        <section className="mb-4">
          <Recommend />
        </section>

        {/* Services Section */}
        <section className="mb-4">
          <Services />
        </section>

        {/* Supply Section */}
        <section className="mb-4">
          <Supply />
        </section>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default Home;
