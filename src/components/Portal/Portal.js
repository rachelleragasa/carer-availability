import React, { useEffect } from "react"
import { createPortal } from "react-dom";

const Portal = ({ children }) => {
    const modalRoot = document.getElementById("modal");
    const element = document.createElement("div");

    useEffect(() => {
        modalRoot.appendChild(element);

        return () => modalRoot.removeChild(element);
    }, [modalRoot, element]);

    return createPortal(children, element);
}

export default Portal