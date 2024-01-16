import { createContext, useRef, useContext, useState } from "react"

// Creating canvas context
const CanvasContext = createContext({});

const CanvasContextProvider = ({ children }) => {
    const canvasRef = useRef(null);
    const canvas = useRef(null);
    const [activeObject, setActiveObject] = useState(null);


    return (
        <CanvasContext.Provider value={{ canvasRef, canvas, activeObject, setActiveObject }}>
            {children}
        </CanvasContext.Provider>
    )
}

export default CanvasContextProvider;

// Consuming Canvas Context
export const useCanvasContext = () => {
    return useContext(CanvasContext);
}