
import "./globals.css";
import "../public/css/bootstrap.min.css";
import "../public/booticon/font/bootstrap-icons.min.css"
import Navbar from "./component/Navbar";
import Navbar2 from "./component/Navbar2";

import Fotter from "./component/Fotter";
import { CartProvider } from "@/src/context/cartContext";





export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg">
       
     
      <CartProvider>
   
       <Navbar2/>
        
        {children}
        <Fotter/>
        </CartProvider>
       
        </body>
      
    </html>
  );
}
