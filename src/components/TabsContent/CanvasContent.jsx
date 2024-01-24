import Button from "../Button"
import RasterizeCanvas from "./RasterizeCanvas"
import { useCanvasContext } from "../../ContextProviders/CanvasContextProvider"

const CanvasContent = () => {
    const { canvas, activeObject } = useCanvasContext();

    const clearCanvas = () => {
console.log(Boolean(canvas?._objects.length > 0))
        canvas.clear();
    }

    const clearSelectedObject = () => {
        canvas.remove(activeObject);
    }

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
        </div>
    )
}

export default CanvasContent