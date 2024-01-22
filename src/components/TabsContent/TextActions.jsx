import { useState } from "react";
import { useCanvasContext } from "../../ContextProviders/CanvasContextProvider"
import { Label } from "./ObjectContent";
import Button from "../Button";


const TextActionButton = ({ name, title, trueValue, falseValue, customClass }) => {
    const { canvas, activeObject } = useCanvasContext();

    const [active, setActive] = useState((trueValue || falseValue) ?
        activeObject.get(name) == trueValue :
        activeObject.get(name));

    const onClickHandler = () => {

        if (trueValue || falseValue) {
            active ? activeObject.set(name, falseValue) : activeObject.set(name, trueValue)
        }
        else {
            activeObject?.set(name, !active);
        }
        setActive((prev) => !prev);
        canvas.current.renderAll();
    }

    return <Button onClickHandler={onClickHandler} attributes={{ disabled: !activeObject }} customClass={customClass}>
        {title}
    </Button>
}



const TextActions = () => {
    const { canvas, activeObject } = useCanvasContext();


    const onChangeHandler = (e) => {
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

    // adding subscript method
    const addSubscript = () => {
        if (activeObject?.subscript?.size == 0.6) {
            // activeObject.set("subscript", { size: 2, baseline: 0.89 });
            activeObject.setSubscript(0, 6);
            canvas.current.renderAll();
        }

        // removing subscript 
        else {
            activeObject.set("subscript", { size: 0.6, baseline: 0.11 });
            activeObject.set("styles", {})
            canvas.current.renderAll();
        }
    }

    const addSuperscript = () => {
        if (activeObject?.superscript?.size == 0.6) {
            activeObject.set("superscript", { size: 2, baseline: -0.89 });
            activeObject.setSuperscript(0, 6);
            canvas.current.renderAll();
        }

        else {
            activeObject.set("superscript", { size: 0.6, baseline: 0.11 });
            activeObject.set("styles", {})
            canvas.current.renderAll();
        }
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
            <select name="fontFamily" onChange={onChangeHandler} defaultValue={activeObject?.fontFamily || "helvetica"}
                className="border-[1px] border-solid border-[#cccccc] rounded cursor-pointer">
                <option value="arial">Arial</option>
                <option value="helvetica">Helvetica</option>
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
            <select name="textAlign" onChange={onChangeHandler} defaultValue={activeObject?.textAlign || "left"}
                className="border-[1px] border-solid border-[#cccccc] rounded cursor-pointer">
                <option value="left">Left</option>
                <option value="center">Center</option>
                <option value="right">Right</option>
                <option value="justify">Justify</option>
                <option value="justify-left">Justify-left</option>
                <option value="justify-right">Justify-right</option>
                <option value="justify-center">Justify-center</option>
            </select>
        </div>

        <div className="flex gap-2">
            <Label>Background text color:</Label>
            <input type="color" name="textBackgroundColor"
                defaultValue={activeObject ? activeObject?.get("textBackgroundColor") : "#0000"}
                onChange={onChangeHandler} />
        </div>

        <div className="flex gap-3">
            <Label>Font Size:</Label>
            <input disabled={!activeObject} name="fontSize" className="w-[200px]" type="range"
                defaultValue={activeObject ? activeObject?.get("fontSize") : 40}
                step={1} min="0" max="120" onChange={onChangeHandler} />
        </div>

        <div className="flex gap-3">
            <Label>Line height:</Label>
            <input disabled={!activeObject} name="lineHeight" className="w-[200px]" type="range"
                defaultValue={activeObject ? activeObject?.get("lineHeight") : 1.16}
                step={0.1} min="0" max="10" onChange={onChangeHandler} />
        </div>

        <div className="flex gap-3">
            <Label>Char spacing:</Label>
            <input disabled={!activeObject} name="charSpacing" className="w-[200px]" type="range"
                defaultValue={activeObject ? activeObject?.get("charSpacing") : 0}
                step={10} min="-200" max="800" onChange={onChangeHandler} />
        </div>

        <div className="flex gap-2 flex-wrap">
            <TextActionButton title="Bold" name="fontWeight" trueValue="bold" falseValue={"400"} />
            <TextActionButton title="Italic" name="fontStyle" trueValue="italic" falseValue={"normal"} />
            <TextActionButton title="Underline" name="underline" customClass="underline" />
            <TextActionButton title="Linethrough" name="linethrough" customClass="line-through" />
            <TextActionButton title="Overline" name="overline" customClass="overline" />
            <Button onClickHandler={addSubscript}>Subscript</Button>
            <Button onClickHandler={addSuperscript}>SuperScript</Button>
            <div className="flex gap-1 items-center">
                <Label>GraphemeSplit</Label>
                <input disabled={!activeObject} type="checkbox" name="graphemeSplit"
                    defaultChecked={activeObject ? activeObject?.get("graphemeSplit") : false}
                    onChange={onChangeHandler} />
            </div>
        </div>


    </div>
}

export default TextActions