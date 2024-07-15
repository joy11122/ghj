import Link from 'next/link'
import React from 'react'

const Heropage = () => {
    return (
        <div>
             <div className="container d-flex w-100 mt-3">
     <div className="row">
            <div className="d-flex  justify-content-center align-items-center col-md-6">
            <div className="content ">
                <p>WELCOME TO</p>
                <h1 className='display-1 fw-bold mb-4'>Joy Store</h1>
                <p>amar sonar bangla ami tomay valobasi Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempora, voluptatem! cirodin tomar akash tomar batash ajigets civilians were r jay and help one the of a </p>
                <Link className="btn btn-primary mb-3 " href="/Product">Shop Now</Link>
            </div>
        </div>
        <div className="col-md-6 ">
            <img src="images/images/p1 (15).jpeg" style={{height:"450px", width:"100%"}} alt=""/>
        </div>
     </div>
    </div>
    
    
        </div>
    )
}

export default Heropage
