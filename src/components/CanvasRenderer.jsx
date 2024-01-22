import { useEffect } from 'react'
import { fabric } from 'fabric';
import { useCanvasContext } from '../ContextProviders/CanvasContextProvider'

const CanvasRenderer = () => {

    const { canvasRef, canvas, activeObject, setActiveObject } = useCanvasContext();


    console.log(activeObject);


    // creating fabric canvas
    const initCanvas = () => (
        new fabric.Canvas(canvasRef.current, {
            selectionColor: 'blue',
            width: 800,
            height: 600,
            preserveObjectStacking: true
        })
    );


    useEffect(() => {
        console.log(canvasRef.current);
        console.log(canvas.current);
        canvas.current = initCanvas();
        window.canvas = canvas.current;
        console.log(canvas.current);

        // Attaching events to canvas

        canvas.current.on('selection:created', function (options) {
            console.log("Selection created", options);

            setActiveObject(options?.selected[0]);

            if (options.target) {
                console.log('an object was clicked! ', options.target.type);
            }
        });

        canvas.current.on('selection:updated', function (options) {
            console.log("Selection updated", options);

            setActiveObject(options?.selected[0]);

            if (options.target) {
                console.log('an object was clicked! ', options.target.type);
            }
        });


        canvas.current.on('selection:cleared', function (options) {
            console.log("Selection cleared", options);

            setActiveObject(null);

            if (options.target) {
                console.log('an object was clicked! ', options.target.type);
            }
        });


        canvas.current.on("before:render", function () {
            console.log("inside before render");
        });

        canvas.current.on("after:render", function (c) {
            console.log("inside after render", c, canvas.current.getActiveObject());
            setActiveObject(canvas.current.getActiveObject());
        });


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