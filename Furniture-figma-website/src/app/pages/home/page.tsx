import Header from "../../components/Header";
import HeroSection from "../../components/HeroSection";
import React from "react";
import Section from "../../components/Section";
import TopProducts from "../../components/TopProducts";
import Banner from "../../components/Banner";
import Blogs from "../../components/Blogs";
import Banner2 from "../../components/Banner2";
import Footer from "../../components/Footer";
// import Banner from '@/app/components/Banner'

const Home = () => {
  return (
    <div>
        <Header/>
      <div className="bg-[#fbebb5]">
        <HeroSection />
      </div>
      <Section />
      <TopProducts />
      <Banner />
      <Blogs />
      <Banner2 />
      <Footer />
    </div>
  );
};

export default Home;
