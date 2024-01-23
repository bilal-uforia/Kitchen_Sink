import { useCanvasContext } from "../../ContextProviders/CanvasContextProvider"
import LockButtons from "./LockButtons"
import OriginInputs from "./OriginInputs"
import ObjectCheckboxInputs from "./ObjectCheckboxInputs"
import ObjectActions from "./ObjectActions"
import TextActions from "./TextActions"

export const Label = ({ children, className }) => {
    return <label className={`text-md leading-[20px] text-[#333333] ${className}`}>{children}</label>
}


const ObjectContent = () => {
    const { canvas, activeObject } = useCanvasContext();

    console.log(activeObject?.get("strokeUniform"));

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
        console.log(value, !value);

        activeObject.set(e?.target?.name, value);
        canvas.current.renderAll();
    }

    const checkboxClickHandler = () => {

    }



    return (
        <div className="flex flex-col gap-4">

            {/* Stroke and colors */}
            <div className="flex flex-col gap-2">

                <div className="flex gap-3">
                    <Label>Fill / Stroke / Background: </Label>
                    <div>
                        <input disabled={!activeObject} type="color" name="fill"
                            value={activeObject ? activeObject?.get("fill") : "#0000"}
                            onChange={onPropChangeHandler}
                        />
                        <input disabled={!activeObject} type="color" name="stroke"
                            value={activeObject ? activeObject?.get("stroke") : "#0000"}
                            onChange={onPropChangeHandler}
                        />
                        <input disabled={!activeObject} type="color" name="backgroundColor"
                            value={activeObject ? activeObject?.get("backgroundColor") : "#0000"}
                            onChange={onPropChangeHandler}

                        />
                    </div>
                </div>

                <div className="flex gap-3">
                    <Label>Opacity:</Label>
                    <input disabled={!activeObject} name="opacity" className="w-[200px]" type="range"
                        value={activeObject ? activeObject?.get("opacity") : 1}
                        step={0.1} min="0" max="1" onChange={(e) => onPropChangeHandler(e)} />
                </div>

                <div className="flex gap-3">
                    <Label>Stroke Width:</Label>
                    <input disabled={!activeObject} name="strokeWidth" className="w-[200px]" type="range"
                        value={activeObject ? activeObject?.get("strokeWidth") : 1}
                        step={1} min="0" max="30" onChange={(e) => onPropChangeHandler(e)} />
                </div>

                <div className="flex gap-1">
                    <Label>Stroke Uniform:</Label>
                    <input disabled={!activeObject} type="checkbox" name="strokeUniform"
                        checked={activeObject?.get("strokeUniform")}
                        onChange={onPropChangeHandler} />
                </div>

            </div>

            {/* Lock actios buttons */}
            <LockButtons />

            {/* Origin X  */}
            <OriginInputs />

            {/* Checkbox actions */}
            <ObjectCheckboxInputs />

            {
                (activeObject?.type == 'i-text' || activeObject?.type == 'text') && <TextActions />
            }

            {/* Object button actions */}
            <ObjectActions />


        </div>
    )
}

export default ObjectContent