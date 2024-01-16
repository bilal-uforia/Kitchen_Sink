export const updateFill = (e, canvas, canvasRef) => {
    const activeObject = canvas.current.getActiveObject()
    const value = e?.target?.value;

    activeObject.set("fill", value);
    canvas.current.renderAll();
}

export const updateStroke = (e, canvas, canvasRef) => {
    const activeObject = canvas.current.getActiveObject()
    const value = e?.target?.value;

    activeObject.set("stroke", value);
    canvas.current.renderAll();
}

export const updateBackground = (e, canvas, canvasRef) => {
    const activeObject = canvas.current.getActiveObject()
    const value = e?.target?.value;

    activeObject.set("backgroundColor", value);
    canvas.current.renderAll();
}

export const updateStrokeWidth = (e, canvas, canvasRef) => {
    const activeObject = canvas.current.getActiveObject()
    const value = e?.target?.value;

    activeObject.set("strokeWidth", value);
    canvas.current.renderAll();
}
