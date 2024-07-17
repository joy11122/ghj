import "./globals.css";
import "../public/css/bootstrap.min.css";
import "../public/booticon/font/bootstrap-icons.min.css";
import Head from 'next/head';

import Navbar2 from "./component/Navbar2";
import Fotter from "./component/Fotter";
import { CartProvider } from "@/src/context/cartContext";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
        />
        <script
          src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/2.9.2/umd/popper.min.js"
          integrity="sha384-IQsoLXl5PILFhosVNubq7ALX+6IomF2Mx03p4JOa5f2lLkCVk6Mggw5UsvFYKX5N"
          crossOrigin="anonymous" defer
        ></script>
        <script
          src="https://maxcdn.bootstrapcdn.com/bootstrap/5.0.0-beta3/js/bootstrap.min.js"
          integrity="sha384-j0P37zC1cK1s7E80tqN/VL0n6QK9K94x8KEv9N1ks2EzH0KQjDzq4LDwi56BRz9K"
          crossOrigin="anonymous" defer
        ></script>
      </Head>
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
