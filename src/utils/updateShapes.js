import { fabric } from "fabric";
import randomColor from "randomcolor";
import { ladybug } from "../assets/images";

// export const updateFill = (e, canvas, canvasRef) => {
//     const activeObject = canvas.current.getActiveObject()
//     const value = e?.target?.value;

//     activeObject.set("fill", value);
//     canvas.current.renderAll();
// }

// export const updateStroke = (e, canvas, canvasRef) => {
//     const activeObject = canvas.current.getActiveObject()
//     const value = e?.target?.value;

//     activeObject.set("stroke", value);
//     canvas.current.renderAll();
// }

// export const updateBackground = (e, canvas, canvasRef) => {
//     const activeObject = canvas.current.getActiveObject()
//     const value = e?.target?.value;

//     activeObject.set("backgroundColor", value);
//     canvas.current.renderAll();
// }

// export const updateStrokeWidth = (e, canvas, canvasRef) => {
//     const activeObject = canvas.current.getActiveObject()
//     const value = e?.target?.value;

//     activeObject.set("strokeWidth", value);
//     canvas.current.renderAll();
// }

export const sendBackwards = (canvas, activeObject) => {
    canvas.current.sendBackwards(activeObject);
    canvas.current.renderAll();
}

export const sendToBack = (canvas, activeObject) => {
    canvas.current.sendToBack(activeObject);
    canvas.current.renderAll();
}

export const bringForwards = (canvas, activeObject) => {
    canvas.current.bringForward(activeObject);
    canvas.current.renderAll();
}

export const bringToFront = (canvas, activeObject) => {
    canvas.current.bringToFront(activeObject);
    canvas.current.renderAll();
}

export const fillGradient = (canvas, activeObject) => {
    const gradient = new fabric.Gradient({
        type: 'linear',
        gradientUnits: 'pixels',
        coords: { x1: 0, y1: 0, x2: activeObject.width, y2: 0 },
        colorStops: [
            { offset: 0, color: randomColor() },
            { offset: 1, color: randomColor() }
        ]
    });

    activeObject.set("fill", gradient);
    canvas?.current?.renderAll();
}

export const addShadow = (canvas, activeObject) => {
    if (activeObject.shadow) {
        activeObject.set({ shadow: null });
    }
    else {
        let shadow = new fabric.Shadow({
            blur: 10,
            color: "rgba(0,0,0,0.3)",
            id: 10,
            offsetX: 10,
            offsetY: 10
        });
        activeObject.set({ shadow })
    }
    console.log(activeObject)
    canvas.current.renderAll();
}

export const fillPattern = (canvas, activeObject) => {
    if (activeObject.fill instanceof fabric.Pattern) {
        activeObject.set({ fill: null })
        canvas.current.renderAll();
    }
    else {
        fabric.util.loadImage(ladybug, function (img) {
            console.log(img);
            const pattern = new fabric.Pattern({
                source: img,
                repeat: 'no-repeat',
            });

            activeObject.set("fill", pattern);

            canvas.current.renderAll();
        });
    }
}

export const addClip = (canvas, activeObject) => {
    if (activeObject.clipPath) {
        activeObject.set({ clipPath: null })
    }
    else {
        const clipCircle = new fabric.Circle({
            radius: activeObject.width / 2,
            top: -50,
            left: -50
        });

        activeObject.set({ clipPath: clipCircle })
    }

    canvas.current.renderAll();
}

export const invertClip = (canvas, activeObject) => {
    if (activeObject.clipPath?.inverted) {
        activeObject.set({ clipPath: null })
    }
    else {
        const clipCircle = new fabric.Circle({
            radius: activeObject.width / 2,
            top: -50,
            left: -50,
            inverted: true
        });

        activeObject.set({ clipPath: clipCircle })
    }

    canvas.current.renderAll();
}

export const playVideo = (canvas, activeObject) => {
    console.log(activeObject.getElement());
    activeObject.getElement().play()
    canvas.current.renderAll();

    fabric.util.requestAnimFrame(function render() {
        canvas.current.renderAll();
        fabric.util.requestAnimFrame(render);
    });
}

export const changePattern = (canvas, activeObject, value) => {
    if (activeObject.fill instanceof fabric.Pattern) {
        fabric.util.loadImage(ladybug, function (img) {
            console.log(img);
            activeObject.set("fill", new fabric.Pattern({
                source: img,
                repeat: value,
            }));
            canvas.current.renderAll();
        });

        // canvas.current.renderAll();
        console.log(activeObject);
    }
}

export const addResizeFilter = (canvas, activeObject) => {
    // if (activeObject instanceof fabric.Image) {
    //     const resizeFilter = new fabric.Image.filters.Resize();
    //     activeObject.filters.push(resizeFilter);
    //     activeObject.applyFilters();
    //     canvas.current.renderAll();
    // }

    activeObject.resizeFilter = new fabric.Image.filters.Resize();
    canvas.current.renderAll();
}


export const addInvertFilter = (canvas, activeObject) => {
    if (activeObject instanceof fabric.Image) {
        const resizeFilter = new fabric.Image.filters.Invert();
        activeObject.filters.push(resizeFilter);
        activeObject.applyFilters();
        canvas.current.renderAll();
    }
}