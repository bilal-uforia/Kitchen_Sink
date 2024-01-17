import { Label } from "./ObjectContent"
import { useCanvasContext } from "../../ContextProviders/CanvasContextProvider"

const OriginInput = ({ labelText, name, value, onChangeHandler }) => {
    const { canvas } = useCanvasContext();
    const activeObject = canvas.current.getActiveObject();

    const defaultChecked = Boolean(activeObject?.get(name) == value);

    return <div className="flex items-center">
        <Label>{labelText}</Label>
        <input disabled={!activeObject} type="radio" defaultChecked={defaultChecked} name={name} value={value} onChange={onChangeHandler}></input>
    </div>
}


const OriginInputs = () => {
    const { canvas } = useCanvasContext();

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
            case "radio":
                value = isNaN(Number(e?.target?.value)) ? e?.target?.value : Number(e?.target?.value);
                break;
        }

        activeObject.set(e?.target?.name, value);
        canvas.current.renderAll();
    }


    return (
        <>
            <div className="flex gap-4 item-center">
                <Label>Origin X:</Label>
                <OriginInput labelText="Left" name="originX" value="left" onChangeHandler={onPropChangeHandler} />
                <OriginInput labelText="Center" name="originX" value="center" onChangeHandler={onPropChangeHandler} />
                <OriginInput labelText="Right" name="originX" value="right" onChangeHandler={onPropChangeHandler} />
                <OriginInput labelText="0.3" name="originX" value={0.3} onChangeHandler={onPropChangeHandler} />
                <OriginInput labelText="0.5" name="originX" value={0.5} onChangeHandler={onPropChangeHandler} />
                <OriginInput labelText="0.7" name="originX" value={0.7} onChangeHandler={onPropChangeHandler} />
                <OriginInput labelText="1" name="originX" value={1} onChangeHandler={onPropChangeHandler} />
            </div>

            <div className="flex gap-4 item-center">
                <Label>Origin Y:</Label>
                <OriginInput labelText="Top" name="originY" value="top" onChangeHandler={onPropChangeHandler} />
                <OriginInput labelText="Center" name="originY" value="center" onChangeHandler={onPropChangeHandler} />
                <OriginInput labelText="Bottom" name="originY" value="bottom" onChangeHandler={onPropChangeHandler} />
                <OriginInput labelText="0.3" name="originY" value={0.3} onChangeHandler={onPropChangeHandler} />
                <OriginInput labelText="0.5" name="originY" value={0.5} onChangeHandler={onPropChangeHandler} />
                <OriginInput labelText="0.7" name="originY" value={0.7} onChangeHandler={onPropChangeHandler} />
                <OriginInput labelText="1" name="originY" value={1} onChangeHandler={onPropChangeHandler} />
            </div>
        </>

    )
}

export default OriginInputs