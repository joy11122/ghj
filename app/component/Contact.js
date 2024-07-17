import React from "react";

const Contact = () => {
  return (
    <div>
      <div className="login  vhfull container contact ">
        <div className="row justify-content-center ">
            <h2 className="text-center mb-5 fw-bold text-decoration-underline">Contact Us Form</h2>
          <div className="col-md-8 card p-3">
          <div className="d-flex w-100 gap-2">
          <div class="mb-3 col-md-6">
            <label for="" class="form-label">Name</label>
            <input
                type="text"
                class="form-control w-100"
                placeholder=""
                aria-describedby="helpId"
            />
            
           </div>
           <div class="mb-3 col-md-6">
            <label for="" class="form-label">Email</label>
            <input
                type="email"
                class="form-control"
                placeholder=""
                aria-describedby="helpId"
            />
            
           </div>
          </div>
          <div className="d-flex w-100 gap-2">
          <div class="mb-3 col-md-6">
            <label for="" class="form-label">Phone</label>
            <input
                type="number"
                class="form-control w-100"
                placeholder=""
                aria-describedby="helpId"
            />
            
           </div>
           <div class="mb-3 col-md-6">
            <label for="" class="form-label">Address</label>
            <input
                type="text"
                class="form-control"
                placeholder=""
                aria-describedby="helpId"
            />
            
           </div>
          </div>
          <div className="d-flex w-100 gap-2">
          <div class="mb-3 col-md-12">
        <div class="mb-3">
            <label for="" class="form-label"></label>
            <textarea placeholder="Write messege here..." class="form-control" name="" id="" cols="53" rows="3"></textarea>
        </div>
        
            
           </div>
           
          </div>
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
