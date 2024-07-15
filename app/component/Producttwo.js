import React from "react";
import CardForProducts from "./CardForProducts";
import TopPart from "./TopPart";
import SideBar from "./SideBar";

const Producttwo = () => {
  return (
    <div>
      <div className="container Producttwo w-100 d-flex justify-content-between">
        <div className="filtersection sidebar ">
          <SideBar/>
        </div>

        <div className="rightside ms-3 ">
          <TopPart />
          <CardForProducts />
        </div>
      </div>
    </div>
  );
};

export default Producttwo;
