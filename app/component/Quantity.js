"use client"
import { useCart } from '@/src/context/cartContext'
import React from 'react'

const Quantity = ({total}) => {
    const {innreament,decreament,amount}=useCart()

    return (
       <>
       <div className='d-flex mb-2'>
       <span className='w-25'>Quantity:</span>
        <div className='d-flex'>
            <i className='bi bi-plus' onClick={()=>innreament(total)}></i>
<span className='ps-2 pe-2 fw-bold ' name="amount" value={amount}>{amount}</span>
            <i className='bi bi-plus-slash-minus' onClick={()=>decreament(total)}></i>
        </div>
       </div>
        </>
    )
}

export default Quantity
