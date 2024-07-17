import "./globals.css";
import "../public/booticon/font/bootstrap-icons.min.css";
import Head from 'next/head';
import Navbar2 from "./component/Navbar2";
import InstallBootstrap from "./component/InstallBootstrap";
import Fotter from "./component/Fotter";
import { CartProvider } from "@/src/context/cartContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
<InstallBootstrap/>
      <body className="bg">
        <CartProvider>
          <Navbar2 />
          {children}
          <Fotter />
        </CartProvider>
      </body>
    </html>
  );
}
