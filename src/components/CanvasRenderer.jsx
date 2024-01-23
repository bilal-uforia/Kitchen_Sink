import { useEffect } from 'react'
import { fabric } from 'fabric';
import { useCanvasContext } from '../ContextProviders/CanvasContextProvider'

const CanvasRenderer = () => {

    const { canvasRef, canvas, activeObject, setActiveObject } = useCanvasContext();
    console.log("Re-rendered", activeObject)


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
            setActiveObject(options?.selected[0]);

            if (options.target) {
                console.log('an object was clicked! ', options.target.type);
            }
        });

        canvas.current.on('selection:updated', function (options) {
            setActiveObject(options?.selected[0]);
        });


        canvas.current.on('selection:cleared', function (options) {
            console.log("Selection cleared", options);

            setActiveObject(null);

            if (options.target) {
                console.log('an object was clicked! ', options.target.type);
            }
        });


        // canvas.current.on("object:modified", function (options) {
        //     console.log("inside object modified", options)
        // })

        // canvas.current.on("before:render", function (options) {
        //     console.log("inside before render  method", options?.target, canvas.current.getActiveObject());
        //     setActiveObject(canvas.current.getActiveObject());
        // });

        // canvas.current.on("after:render", function (c) {
        //     // console.log("inside after render  method", canvas.current.getActiveObject());
        //     // setActiveObject(canvas.current.getActiveObject());
        // });

        return () => {
            canvas.current.dispose = null;
            canvas.current = null;
        }

    }, []);


    useEffect(() => {
        console.log(fabric.Object.prototype);
        const set = fabric.Object.prototype.set;
        const initialize = fabric.Object.prototype.initialize;

        console.log(set);


        fabric.Object.prototype.initialize = function (...args) {
            initialize.call(this, ...args);

            this.on('selected', function () {
                this.selected = true;
                console.log('inside object selected');
            });

            this.on('deselected', function () {
                this.selected = false;
                console.log('inside object deselected');
            });

        }


        fabric.Object.prototype.set = function (...args) {
            console.log(args)
            // this._set(key, value);
            console.log(this);
            set.call(this, ...args);
            canvas.current.fire("property:changed", { target: this })
        }

        console.log(fabric.Object.prototype.set);

        canvas.current.on('property:changed', function (options) {
            var modifiedObject = options?.target;
            console.log('Property changed:', modifiedObject?.selected, modifiedObject);
            if (modifiedObject?.selected) {
                setActiveObject(modifiedObject)
                console.log("inside selected active object")
                modifiedObject.clone((obj) => {
                    console.log(obj); 
                    // setActiveObject(obj)
                });
                // setActiveObject(modifiedObject.clone((obj) => {
                //     console.log(modifiedObject);
                //     setActiveObject(obj)
                // }));
                // setActiveObject(modifiedObject);
            }
        });

    }, [])




    return (
        <canvas id="c" ref={canvasRef} className='border-[0.5px] border-solid border-[#000000]'></canvas>
    )
}

export default CanvasRenderer