import React from "react";

const Navbar = () => {
  return (
   <div className="bg-black">
     <div className="d-flex flex-wrap overflow-scroll container  justify-content-between text-light align-items-center">
     
     <div>
       <i className="bi bi-instagram ms-2"></i>
       <i className="bi bi-facebook ms-2"></i>
       <i className="bi bi-twitter ms-2"></i>
       <i className="bi bi-github ms-2"></i>
     </div>

    
       <p className="mt-2">FREE SHIPPING THIS WEAK ORDER OVER $55</p>
    

     <div className="d-flex text-light">
      <div>
         <select className="text-light">
             <option className="text-black" value="English">$USD</option>
             <option className="text-black" value="Bangla">TK</option>
             
         </select>
      </div>
      <div>
         <select className="text-light">
             <option className="text-black" value="English">English</option>
             <option className="text-black" value="Bangla">Bangla</option>
             <option className="text-black" value="Hindi">Hindi</option>
         </select>
      </div>
     </div>

   </div>

   </div>
  );
};

export default Navbar;
