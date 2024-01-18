import { fabric } from "fabric";
import randomColor from "randomcolor";

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
    if (activeObject?.shadow) {
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