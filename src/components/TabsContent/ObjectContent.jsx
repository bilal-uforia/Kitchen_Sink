import { useCanvasContext } from "../../ContextProviders/CanvasContextProvider"
import { updateFill, updateStroke, updateBackground } from "../../utils/updateShapes"
import LockButtons from "./LockButtons"
import OriginInputs from "./OriginInputs"
import ObjectCheckboxInputs from "./ObjectCheckboxInputs"

export const Label = ({ children, className }) => {
    return <label className={`text-md leading-[20px] text-[#333333] ${className}`}>{children}</label>
}


const ObjectContent = () => {
    const { canvas } = useCanvasContext();
    const activeObject = canvas.current.getActiveObject();


    const onPropChangeHandler = (e) => {
        const activeObject = canvas.current.getActiveObject();
        let value = e?.target?.value;

        switch (e?.target?.type) {
            case "range":
                value = Number(e?.target?.value)
                break;
            case "checkbox":
                value = e?.target?.checked;
                break;
        }

        activeObject.set(e?.target?.name, value);
        canvas.current.renderAll();
    }


    return (
        <div className="flex flex-col gap-4">

            {/* Stroke and colors */}
            <div className="flex flex-col gap-2">

                <div className="flex gap-3">
                    <Label>Fill / Stroke / Background: </Label>
                    <div>
                        <input disabled={!activeObject} type="color" name="fill"
                            defaultValue={activeObject ? activeObject?.get("fill") : "#0000"}
                            onChange={onPropChangeHandler} />
                        <input disabled={!activeObject} type="color" name="stroke"
                            defaultValue={activeObject ? activeObject?.get("stroke") : "#0000"}
                            onChange={onPropChangeHandler}
                        />
                        <input disabled={!activeObject} type="color" name="backgroundColor"
                            defaultValue={activeObject ? activeObject?.get("backgroundColor") : "#0000"}
                            onChange={onPropChangeHandler} />
                    </div>
                </div>

                <div className="flex gap-3">
                    <Label>Opacity:</Label>
                    <input disabled={!activeObject} name="opacity" className="w-[200px]" type="range"
                        defaultValue={activeObject ? activeObject?.get("opacity") : 1}
                        step={0.1} min="0" max="1" onChange={(e) => onPropChangeHandler(e, true)} />
                </div>

                <div className="flex gap-3">
                    <Label>Stroke Width:</Label>
                    <input disabled={!activeObject} name="strokeWidth" className="w-[200px]" type="range"
                        defaultValue={activeObject ? activeObject?.get("strokeWidth") : 1}
                        step={1} min="0" max="30" onChange={(e) => onPropChangeHandler(e, true)} />
                </div>

                <div className="flex gap-1">
                    <Label>Stroke Uniform:</Label>
                    <input disabled={!activeObject} type="checkbox" name="strokeUniform"
                        defaultChecked={activeObject ? activeObject?.get("strokeUniform") : false}
                        onChange={onPropChangeHandler} />
                </div>

            </div>

            {/* Lock Buttons */}
            <LockButtons />

            {/* Origin X  */}
            <OriginInputs />

            <ObjectCheckboxInputs />
        </div>
    )
}

export default ObjectContent