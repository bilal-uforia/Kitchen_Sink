import { useEffect } from 'react'
import { fabric } from 'fabric';
import { useCanvasContext } from '../ContextProviders/CanvasContextProvider'

const CanvasRenderer = () => {

    const { canvasRef, canvas } = useCanvasContext();

    // creating fabric canvas
    const initCanvas = () => (
        new fabric.Canvas(canvasRef.current, {
            selectionColor: 'blue',
            width: 800,
            height: 600
        })
    );


    useEffect(() => {
        console.log(canvasRef.current);
        console.log(canvas.current);
        canvas.current = initCanvas();
        console.log(canvas.current);

        return () => {
            canvas.current.dispose = null;
            canvas.current = null;
        }

    }, []);



    return (
        <canvas id="c" ref={canvasRef} className='border-[0.5px] border-solid border-[#000000]'></canvas>
    )
}

export default CanvasRenderer