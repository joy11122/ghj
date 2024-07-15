import React from "react";
import Contact from "./component/Contact";

import Heropage from "./component/Heropage";
import Sevice from "./component/Sevice";

import Hero from "./component/Hero";

const page = () => {
  return (
    <div>

<Hero/>
    <Heropage />
    
    
    <Sevice />
    <Contact />
    </div>
  );
};

export default page;
