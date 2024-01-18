import { useCanvasContext } from "../../ContextProviders/CanvasContextProvider"
import Button from "../Button"
import {
    sendBackwards, sendToBack, bringForwards, bringToFront, fillGradient, addShadow,
    fillPattern, addClip, invertClip, playVideo
} from "../../utils/updateShapes"


const ObjectActions = () => {
    const { canvas } = useCanvasContext();
    const activeObject = canvas?.current?.getActiveObject();

    return (
        <div className="flex flex-col gap-4">

            {/* Visibility position actions */}
            <div className="flex gap-2 max-w-[300px] flex-wrap">
                <Button onClickHandler={() => sendBackwards(canvas, activeObject)} attributes={{ disabled: !activeObject }}>Send backwards</Button>
                <Button onClickHandler={() => sendToBack(canvas, activeObject)} attributes={{ disabled: !activeObject }}>Send to back</Button>
                <Button onClickHandler={() => bringForwards(canvas, activeObject)} attributes={{ disabled: !activeObject }}>Bring forwards</Button>
                <Button onClickHandler={() => bringToFront(canvas, activeObject)} attributes={{ disabled: !activeObject }}>Send to front</Button>
            </div>

            <div className="flex gap-2">
                <Button onClickHandler={() => fillGradient(canvas, activeObject)} attributes={{ disabled: !activeObject }}>
                    Gradientify
                </Button>
                <Button onClickHandler={() => addShadow(canvas, activeObject)} attributes={{ disabled: !activeObject }}>
                    Shadowify
                </Button>
                <Button onClickHandler={() => fillPattern(canvas, activeObject)} attributes={{ disabled: !activeObject }}>
                    Patternify
                </Button>
                <Button onClickHandler={() => addClip(canvas, activeObject)} attributes={{ disabled: !activeObject }}>
                    Clip
                </Button>
                <Button onClickHandler={() => invertClip(canvas, activeObject)} attributes={{ disabled: !activeObject }}>
                    Inverted clip
                </Button>
                <Button onClickHandler={() => playVideo(canvas, activeObject)} attributes={{ disabled: !activeObject }}>
                    Play
                </Button>

            </div>


        </div>
    )
}

export default ObjectActions