import { createContext, useRef, useContext } from "react"

// Creating canvas context
const CanvasContext = createContext({});

const CanvasContextProvider = ({ children }) => {
    const canvasRef = useRef(null);
    const canvas = useRef(null);

    return (
        <CanvasContext.Provider value={{ canvasRef, canvas }}>
            {children}
        </CanvasContext.Provider>
    )
}

export default CanvasContextProvider;

// Consuming Canvas Context
export const useCanvasContext = () => {
    return useContext(CanvasContext);
}