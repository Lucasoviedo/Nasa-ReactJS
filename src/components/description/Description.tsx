import  { useState } from "react";
import React from "react";

export const Description = ({children}) => {
    const [open, setOpen] = useState(true)

    return (
        <div >
            {open && 
                <div >
                    {children}
                </div>
            }
        </div>
    )
}
