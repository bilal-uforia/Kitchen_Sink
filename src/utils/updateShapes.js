import { fabric } from "fabric";
import randomColor from "randomcolor";
import { ladybug } from "../assets/images";


export const sendBackwards = (canvas, activeObject) => {
    canvas.sendBackwards(activeObject);
    canvas.renderAll();
}

export const sendToBack = (canvas, activeObject) => {
    canvas.sendToBack(activeObject);
    canvas.renderAll();
}

export const bringForwards = (canvas, activeObject) => {
    canvas.bringForward(activeObject);
    canvas.renderAll();
}

export const bringToFront = (canvas, activeObject) => {
    canvas.bringToFront(activeObject);
    canvas.renderAll();
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
    canvas.renderAll();
}

export const fillPattern = (canvas, activeObject) => {
    if (activeObject.fill instanceof fabric.Pattern) {
        activeObject.set({ fill: null })
        canvas.renderAll();
    }
    else {
        fabric.util.loadImage(ladybug, function (img) {
            console.log(img);
            const pattern = new fabric.Pattern({
                source: img,
                repeat: 'no-repeat',
            });

            activeObject.set("fill", pattern);

            canvas.renderAll();
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

    canvas.renderAll();
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

    canvas.renderAll();
}

export const playVideo = (canvas, activeObject) => {
    console.log(activeObject._element);
    activeObject._element?.play();
    canvas.renderAll();

    fabric.util.requestAnimFrame(function render() {
        canvas.renderAll();
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
            canvas.renderAll();
        });

        // canvas.renderAll();
        console.log(activeObject);
    }
}

export const addResizeFilter = (canvas, activeObject) => {
    console.log(activeObject instanceof fabric.Image && activeObject?.filters[0]?.type !== "Resize");
    if (activeObject instanceof fabric.Image && activeObject?.filters[0]?.type !== "Resize") {
        const resizeFilter = new fabric.Image.filters.Resize();
        activeObject.filters = [resizeFilter];
        activeObject.applyFilters();
        canvas.renderAll();
    }
    canvas.renderAll();
}


export const addInvertFilter = (canvas, activeObject) => {
    if (activeObject instanceof fabric.Image && activeObject?.filters[0]?.type !== "Invert") {
        const inverFilter = new fabric.Image.filters.Invert();
        activeObject.filters = [inverFilter];
        activeObject.applyFilters();
        canvas.renderAll();
    }
}

export const addContrastFilter = (canvas, activeObject) => {
    if (activeObject instanceof fabric.Image && activeObject?.filters[0]?.type !== "Contrast") {
        const contrastFilter = new fabric.Image.filters.Contrast({
            contrast: 0.25
        });
        activeObject.filters = [contrastFilter];
        activeObject.applyFilters();
        canvas.renderAll();
    }
}