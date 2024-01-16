import { useState } from "react"
import Button from "../Button";
import { useCanvasContext } from "../../ContextProviders/CanvasContextProvider";

const LockButton = ({ children, property }) => {
    const { canvas } = useCanvasContext();
    const activeObject = canvas?.current?.getActiveObject();

    console.log(activeObject);

    const [locked, setLocked] = useState(Boolean(activeObject?.get(property)));


    const onClickHandler = () => {
        activeObject?.set(property, !locked);
        setLocked((prev) => !prev);
    }

    return (
        <Button onClickHandler={onClickHandler} attributes={{ disabled: !activeObject }}>
            {`${locked ? "Unlock" : "Lock"} ${children}`}
        </Button>
    )
}

const LockButtons = () => {

    return <div className="flex flex-wrap gap-2">
        <LockButton property="lockMovementX"> horizontal movement</LockButton>
        <LockButton property="lockMovementY"> vertical  movement</LockButton>
        <LockButton property="lockMovementY"> vertical  movement</LockButton>
    </div>
}

export default LockButtons;