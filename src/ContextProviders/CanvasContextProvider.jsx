import { createContext, useRef, useContext, useState } from "react"

// Creating canvas context
const CanvasContext = createContext({});

const CanvasContextProvider = ({ children }) => {
    const canvasRef = useRef(null);
    const [canvas, setCanvas] = useState(null);
    const [activeObject, setActiveObject] = useState(null);

    console.log(activeObject);

    return (
        <CanvasContext.Provider value={{ canvasRef, canvas, setCanvas, activeObject, setActiveObject }}>
            {children}
        </CanvasContext.Provider>
    )
}

export default CanvasContextProvider;

// Consuming Canvas Context
export const useCanvasContext = () => {
    return useContext(CanvasContext);
}