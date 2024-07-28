import Link from "next/link";
import React from "react";
import Social from "./Social";

const Fotter = () => {
  return (
    <div className="container-fluid bg-black">
      <footer className="container flex-wrap Justify-content-between mb-5 mt-5 align-items-center   text-light">
        <div className="row">
          <div className="col-md-3 flex-wrap d-flex flex-column justify-content-center align-items-center p-3   ">
           <i className="bi bi-laptop display-6 "></i>
               <p className="text-center">
              Lorem ipsum dolor sint 
               earum molestias! Ve
               reprehenderit
                reprehenderit
              </p>
           
          </div>

          <div className="col-md-3  d-flex justify-content-center align-items-center ">
            <div>
              <span>Office</span>
              <p>
                Roypara,Khulna <br />
                bangladesh,9100
                <br />
                Dighaliya
              </p>
              <p>joyanto@gmail.com</p>
              <span>01751421014</span>
            </div>
          </div>
          <div className=" flink col-md-3  d-flex flex-column  gap-2 justify-content-center align-items-center">
           
              <Link className="text-light text-decoration-none" href="/">
                Home
              </Link>
            
           
              <Link className="text-light text-decoration-none" href="/About">
                About
              </Link>
            
           
              <Link className="text-light text-decoration-none" href="/Contact">
                Contact
              </Link>
            
           
              <Link className="text-light text-decoration-none" href="/Service">
                Service
              </Link>
            
           
              <Link className="text-light text-decoration-none" href="/Blog">
                Blog
              </Link>
         
          </div>
          <div className="col-md-3 p-3 d-flex flex-column justify-content-center  align-items-center ">
            <h4 className="mb-">Newsletter</h4>
            <div className="d-flex justify-content-between align-items-center ">
              <i className="bi bi-mailbox"></i>
              <input
                className="p-2 mb-4 mt-4 w-100"
                type="email"
                placeholder="Enter Email Here"
              />
              <i className="bi bi-arrow-right "></i>
            </div>

            <div>
              <i className="bi bi-instagram ms-2 " style={{fontSize:"25px"}}></i>
              <i className="bi bi-facebook ms-2 " style={{fontSize:"25px"}}></i>
              <i className="bi bi-twitter ms-2 " style={{fontSize:"25px"}}></i>
              <i className="bi bi-github ms-2 " style={{fontSize:"25px"}}></i>
            </div>
          </div>
          <hr />
          <p className="text-center">All-ready Reserved</p>
          <Social/>
        </div>
      </footer>
    </div>
  );
};

export default Fotter;
