import { useCanvasContext } from "../../ContextProviders/CanvasContextProvider"
import { Label } from "./ObjectContent";

const TextActions = () => {
    const { canvas } = useCanvasContext();
    const activeObject = canvas.current.getActiveObject();


    const onChangeHandler = (e) => {
        activeObject.set(e?.target?.name, e?.target?.value);
        canvas.current.renderAll();
    }

    return <div className="flex flex-col gap-2 border-[1px] border-solid border-[#cccccc] rounded px-3 py-4">

        <Label>Text specific controls</Label>
        <div className="max-w-[300px]">
            <textarea bind-value-to="text" rows="3" columns="80" name="text" onChange={onChangeHandler}
                className="p-2 rounded overflow-y-scroll resize-none h-[80px] w-full border-[1px] border-solid border-[#cccccc] rounded"
                defaultValue={activeObject?.text}>
            </textarea>
        </div>

        <div className="flex gap-2">
            <Label>Font family:</Label>
            <select name="fontFamily" onChange={onChangeHandler}
                className="border-[1px] border-solid border-[#cccccc] rounded cursor-pointer">
                <option value="arial">Arial</option>
                <option value="helvetica" selected="">Helvetica</option>
                <option value="myriad pro">Myriad Pro</option>
                <option value="delicious">Delicious</option>
                <option value="verdana">Verdana</option>
                <option value="georgia">Georgia</option>
                <option value="courier">Courier</option>
                <option value="comic sans ms">Comic Sans MS</option>
                <option value="impact">Impact</option>
                <option value="monaco">Monaco</option>
                <option value="optima">Optima</option>
                <option value="hoefler text">Hoefler Text</option>
                <option value="plaster">Plaster</option>
                <option value="engagement">Engagement</option>
            </select>
        </div>

        <div className="flex gap-2">
            <Label>Text Align:</Label>
        </div>

    </div>
}

export default TextActions