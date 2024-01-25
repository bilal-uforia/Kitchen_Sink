import Button from "../Button"
import RasterizeCanvas from "./RasterizeCanvas"
import { useCanvasContext } from "../../ContextProviders/CanvasContextProvider"
import { Label } from "./ObjectContent"

const CanvasContent = () => {
    const { canvas, activeObject } = useCanvasContext();

    const clearCanvas = () => {
        if (confirm("Are you sure?")) {
            console.log(Boolean(canvas?._objects.length > 0))
            canvas.clear();
        }
    }

    const clearSelectedObject = () => {
        canvas.remove(activeObject);
    }

    const onPropChangeHandler = (e) => {
        let value = e?.target?.value;

        switch (e?.target?.type) {
            case "range":
                value = Number(e?.target?.value)
                break;
            case "checkbox":
                value = (e.target.checked);
                break;
        }

        canvas.set(e?.target?.name, value);
        canvas.renderAll();
    }

    console.log("inside canvas content")

    // if (canvas) {
    //     canvas.set("controlsAboveOverlay", true);
    //     // canvas.renderAll();
    //     canvas.setOverlayColor({
    //         source: 'http://fabricjs.com/assets/escheresque_ste.png'
    //     }, canvas.renderAll.bind(canvas), {
    //         opacity: 0
    //     });

    // }

    return (
        <div className="flex flex-col gap-4">
            <p className='text-md text-[#333333]'>Canvas complexity (number of paths): <b>2</b></p>
            <RasterizeCanvas />
            <div className="flex gap-2">
                <Button bgColor="bg-[#da4f49]" customClass="text-[#ffffff] font-semibold" onClickHandler={clearCanvas}
                    attributes={{ disabled: !Boolean(canvas?._objects.length > 0) }}>
                    Clear Canvas
                </Button>
                <Button onClickHandler={clearSelectedObject} attributes={{ disabled: !activeObject }}>Remove selected object/group</Button>
            </div>
            <div className="flex gap-2">
                <Label>Background</Label>
                <input disabled={!canvas} type="color" name="backgroundColor"
                    defaultValue={canvas ? canvas?.get("backgroundColor") : "#0000"}
                    onChange={onPropChangeHandler}
                />
            </div>
            {canvas &&
                <>
                    <div className="flex gap-3">
                        <div className="flex gap-1">
                            <Label>Enable HIDPI (retina) scaling:</Label>
                            <input disabled={!canvas} type="checkbox" name="enableRetinaScaling"
                                defaultChecked={canvas?.get("enableRetinaScaling") || false}
                                onChange={onPropChangeHandler} />
                        </div>
                        <div className="flex gap-1">
                            <Label>Skip offscreen rendering</Label>
                            <input disabled={!canvas} type="checkbox" name="skipOffscreen"
                                defaultChecked={canvas?.get("skipOffscreen") || false}
                                onChange={onPropChangeHandler} />
                        </div>
                    </div>

                    <div className="flex gap-3">
                        <div className="flex gap-1">
                            <Label>Preserve Stacking:</Label>
                            <input disabled={!canvas} type="checkbox" name="preserveObjectStacking"
                                defaultChecked={canvas?.get("preserveObjectStacking") || false}
                                onChange={onPropChangeHandler} />
                        </div>
                        <div className="flex gap-1">
                            <Label>Controls above overlay</Label>
                            <input disabled={!canvas} type="checkbox" name="controlsAboveOverlay"
                                defaultChecked={canvas?.get("controlsAboveOverlay") || false}
                                onChange={onPropChangeHandler} />
                        </div>
                    </div>
                </>
            }
        </div>
    )
}

export default CanvasContent