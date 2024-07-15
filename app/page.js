import React from "react";
import Contact from "./component/Contact";
import MultiCarouselTemplate from "./component/carousel/Carousel";
import Heropage from "./component/Heropage";
import Sevice from "./component/Sevice";
import Navbar from "./component/Navbar";
import Navbar2 from "./component/Navbar2";
import Hero from "./component/Hero";

const page = () => {
  return (
    <div>

<Hero/>
    <Heropage />
    
    <MultiCarouselTemplate />
    <Sevice />
    <Contact />
    </div>
  );
};

export default page;
