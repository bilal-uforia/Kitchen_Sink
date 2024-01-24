import { useEffect } from 'react'
import { fabric } from 'fabric';
import { useCanvasContext } from '../ContextProviders/CanvasContextProvider'

const CanvasRenderer = () => {

    const { canvasRef, canvas, setCanvas, activeObject, setActiveObject } = useCanvasContext();
    console.log(canvas);


    // creating fabric canvas
    const initCanvas = () => {
        setCanvas(
            new fabric.Canvas(canvasRef.current, {
                selectionColor: 'blue',
                width: 800,
                height: 600,
                preserveObjectStacking: true, 
                backgroundColor:"white"
            })
        )
    };


    useEffect(() => {
        initCanvas();
    }, [])


    useEffect(() => {

        if (canvas) {

            window.canvas = canvas;

            canvas.on('selection:created', function (options) {
                setActiveObject(options?.selected[0]);
            });

            canvas.on('selection:updated', function (options) {
                setActiveObject(options?.selected[0]);
            });


            canvas.on('selection:cleared', function (options) {

                setActiveObject(null);

            });


            // canvas.on("object:modified", function (options) {
            //     console.log("inside object modified", options)
            // })

            // canvas.on("before:render", function (options) {
            //     console.log("inside before render  method", options?.target, canvas.getActiveObject());
            //     setActiveObject(canvas.getActiveObject());
            // });

            // canvas.on("after:render", function (c) {
            //     // console.log("inside after render  method", canvas.getActiveObject());
            //     // setActiveObject(canvas.getActiveObject());
            // });


        }

    }, [canvas]);


    // useEffect(() => {
    //     if (canvas) {
    //         const set = fabric.Object.prototype.set;
    //         const initialize = fabric.Object.prototype.initialize;



    //         fabric.Object.prototype.initialize = function (...args) {
    //             initialize.call(this, ...args);

    //             this.on('selected', function () {
    //                 this.selected = true;
    //                 console.log('inside object selected');
    //             });

    //             this.on('deselected', function () {
    //                 this.selected = false;
    //                 console.log('inside object deselected');
    //             });

    //         }


    //         fabric.Object.prototype.set = function (...args) {
    //             console.log(args)
    //             // this._set(key, value);
    //             console.log(this);
    //             set.call(this, ...args);
    //             canvas.fire("property:changed", { target: this })
    //         }

    //         console.log(fabric.Object.prototype.set);

    //         canvas.on('property:changed', function (options) {
    //             var modifiedObject = options?.target;
    //             console.log('Property changed:', modifiedObject?.selected, modifiedObject, { ...modifiedObject });
    //             if (modifiedObject?.selected) {
    //                 setActiveObject(modifiedObject)
    //                 console.log("inside selected active object")
    //                 // modifiedObject.clone((obj) => {
    //                 //     console.log(obj); 
    //                 //      setActiveObject(obj)
    //                 // });
    //                 // setActiveObject(modifiedObject.clone((obj) => {
    //                 //     console.log(modifiedObject);
    //                 //     setActiveObject(obj)
    //                 // }));
    //                 // setActiveObject(modifiedObject);
    //             }
    //         });


    //     }

    // }, [canvas])


    return (
        <canvas id="c" ref={canvasRef} className='border-[0.5px] border-solid border-[#000000]'></canvas>
    )
}

export default CanvasRenderer