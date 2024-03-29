import { useEffect, useState } from "react"
import Button from "../Button";
import { useCanvasContext } from "../../ContextProviders/CanvasContextProvider";

const LockButton = ({ children, property }) => {
    const { activeObject } = useCanvasContext();

    const [locked, setLocked] = useState(Boolean(activeObject?.get(property)));


    const onClickHandler = () => {
        activeObject?.set(property, !locked);
        setLocked((prev) => !prev);
    }

    useEffect(() => {
        setLocked(Boolean(activeObject?.get(property)));
    }, [activeObject])


    return (
        <Button onClickHandler={onClickHandler} attributes={{ disabled: !activeObject }}>
            {`${locked ? "Unlock" : "Lock"} ${children}`}
        </Button>
    )
}

const LockButtons = () => {

    return <div className="flex flex-wrap gap-2">
        <LockButton property="lockMovementX">horizontal movement</LockButton>
        <LockButton property="lockMovementY">vertical movement</LockButton>
        <LockButton property="lockScalingX">hotizontal scaling</LockButton>
        <LockButton property="lockScalingY">vertical scaling</LockButton>
        <LockButton property="lockRotation">rotation</LockButton>
        <LockButton property="lockScalingFlip">scaling flip</LockButton>
    </div>
}

export default LockButtons;