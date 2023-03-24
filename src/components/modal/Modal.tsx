import  { useState } from "react";
import React from "react";

import './modal.css'

export const Modal = ({children , closeModal}) => {
    const [open, setOpen] = useState(true)

    const handleClick = (e) => {
        if(e.target.className === 'modal-container' || e.target.className === 'modal-close-button'){
            setOpen(false)
            closeModal()
        }
    }

    return (
        <div onClick={handleClick} className='modal-complete'>
            {open && 
                <div className='modal-container'>
                    <div className='modal-card'>
                        <button className='modal-close-button'>X</button>
                        {children}
                    </div>
                </div>
            }
        </div>
    )
}
