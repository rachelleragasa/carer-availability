import React, { createContext, useState } from "react"

export const GlobalContext = createContext();

const GlobalContextProvider = ({ children }) => {
    const [carersList, setCarersList] = useState([]);
    const [availableTimeSlots, setAvailableTimeSlots] = useState([]);
    const [carerName, setCarerName] = useState('');
    const [showModal, setShowModal] = useState(false);
    return (
        <GlobalContext.Provider value={{carersList, setCarersList, availableTimeSlots, setAvailableTimeSlots, carerName, setCarerName, showModal, setShowModal}}>
            {children}
        </GlobalContext.Provider>
    )
}

export default GlobalContextProvider