import { useState } from "react";
import React , { createContext } from "react";

const DescriptionContext = createContext();

const DescriptionProvider = ({ children }) => {
    const [descriptionData , setDescriptionData] = useState()
    // const [openMenu, setOpenMenu] = useState(false)

    const handleDescriptionChange = (data) => {
        setDescriptionData(data)
    }
    const data = { descriptionData, handleDescriptionChange };

    return <DescriptionContext.Provider value={data}>{children}</DescriptionContext.Provider>;
};

export { DescriptionProvider };
export default DescriptionContext;