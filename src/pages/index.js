import { useState } from "react";
import SectionTwo from "../components/Home/SectionTwo";
import Carousel from "../components/Utils/Carousel";
import Footer from "../components/Footer";
import Header from "../components/Header";
import TopCategories from "../components/Home/SmallScreen/TopCategories";
import SectionOne from "../components/Home/SectionOne";
import SectionThree from "../components/Home/SectionThree";
import SectionForth from "../components/Home/SectionForth";
import SectionFifth from "../components/Home/SectionFifth";

export default function Home() {
  return (
    <div className="scroll-smooth">
      <Header />
      <SectionOne />
      <SectionTwo />
      <div className="hidden px-4 max-[599px]:block">
        <TopCategories />
      </div>
      <SectionThree />
      <SectionForth />
      <SectionFifth />
      <div className="md:px-8 h-56 mb-14">
        <Carousel />
      </div>
      <Footer />
    </div>
  )
}
