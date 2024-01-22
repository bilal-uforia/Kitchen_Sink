import { Label } from "./ObjectContent"
import { useCanvasContext } from "../../ContextProviders/CanvasContextProvider"

const CheckboxInput = ({ labelText, name, onChangeHandler }) => {
    const { activeObject } = useCanvasContext();


    console.log(activeObject?.get(name));

    return <div className="flex gap-1">
        <Label>{labelText}</Label>
        <input disabled={!activeObject} type="checkbox" name={name}
            defaultChecked={activeObject ? activeObject?.get(name) : false}
            onChange={onChangeHandler} />
    </div>
}



const ObjectCheckboxInputs = () => {
    const { activeObject } = useCanvasContext();


    const onPropChangeHandler = (e) => {
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
        console.log(activeObject);
    }


    return (
        <div className="flex flex-col gap-2">
            <div className="flex gap-4">
                <CheckboxInput labelText="Cache" name="objectCaching" onChangeHandler={onPropChangeHandler} />
                <CheckboxInput labelText="No scaling cache" name="noScaleCache" onChangeHandler={onPropChangeHandler} />
            </div>

            <div className="flex gap-4">
                <CheckboxInput labelText="Controls" name="hasControls" onChangeHandler={onPropChangeHandler} />
                <CheckboxInput labelText="Transparent Corners" name="transparentCorners" onChangeHandler={onPropChangeHandler} />
                <CheckboxInput labelText="Borders" name="hasBorders" onChangeHandler={onPropChangeHandler} />
                <CheckboxInput labelText="Centered Rotation" name="centeredRotation" onChangeHandler={onPropChangeHandler} />

            </div>
        </div>
    )
}

export default ObjectCheckboxInputs