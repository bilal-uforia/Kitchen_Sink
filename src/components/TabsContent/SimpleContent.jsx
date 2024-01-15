import Button from "../Button"
import { useCanvasContext } from "../../ContextProviders/CanvasContextProvider"
import {
    addRectangle, addCircle, addTriangle, addLine, addPolygon, addText, addIText, addPatternRect,
    addImagePug, addImageGoogle, addImagePrintio, addBunnyVideo,
    addGradient1, addGradient2, addGradient3, addGradient4,
    addArc1, addArc2, addArc3, addArc4, addArc5,
     add36PathsShape
} from "../../utils/addShapes";


const SimpleContent = () => {
    const { canvas, canvasRef } = useCanvasContext();
    console.log(canvasRef.current.getBoundingClientRect());

    return (
        <div className="flex flex-col gap-3">
            {/* Rendering simple shapes */}
            <div>
                <p className='text-md mb-[10px] text-[#333333]'>Add <b>simple shapes</b> to canvas:</p>
                <div className="flex gap-4 flex-wrap">
                    <Button onClickHandler={() => addRectangle(canvas, canvasRef)}>Rectangle</Button>
                    <Button onClickHandler={() => addCircle(canvas, canvasRef)}>Circle</Button>
                    <Button onClickHandler={() => addTriangle(canvas, canvasRef)}>Triangle</Button>
                    <Button onClickHandler={() => addLine(canvas, canvasRef)}>Line</Button>
                    <Button onClickHandler={() => addPolygon(canvas, canvasRef)}>Polygon</Button>
                    <Button onClickHandler={() => addText(canvas, canvasRef)}>Add Text</Button>
                    <Button onClickHandler={() => addIText(canvas, canvasRef)}>Add IText</Button>
                    <Button onClickHandler={() => addPatternRect(canvas, canvasRef)}>Pattern React</Button>
                </div>
            </div>

            {/* Rendering images */}
            <div>
                <p className='text-md mb-[10px] text-[#333333]'>Add <b>images</b> to canvas:</p>
                <div className="flex gap-4 flex-wrap">
                    <Button onClickHandler={() => addImagePug(canvas, canvasRef)}>Image 1 (pug)</Button>
                    <Button onClickHandler={() => addImageGoogle(canvas, canvasRef)}>Image 2 (google)</Button>
                    <Button onClickHandler={() => addImagePrintio(canvas, canvasRef)}>Image 3 (printio)</Button>
                    <Button onClickHandler={() => addBunnyVideo(canvas, canvasRef)}>Bunny Video</Button>

                </div>
            </div>

            {/* Rendering gradient based shapes */}
            <div>
                <p className='text-md mb-[10px] text-[#333333]'>Add <b>gradient-based shapes</b> to canvas:</p>
                <div className="flex gap-4 flex-wrap">
                    <Button onClickHandler={() => addGradient1(canvas, canvasRef)}>Gradient 1</Button>
                    <Button onClickHandler={() => addGradient2(canvas, canvasRef)}>Gradient 2</Button>
                    <Button onClickHandler={() => addGradient3(canvas, canvasRef)}>Gradient 3</Button>
                    <Button onClickHandler={() => addGradient4(canvas, canvasRef)}>Gradient 4</Button>
                </div>
            </div>

            {/* Rendering gradient based shapes */}
            <div>
                <p className='text-md mb-[10px] text-[#333333]'>Add <b>arcs</b> and misc to canvas:</p>
                <div className="flex gap-4 flex-wrap">
                    <Button onClickHandler={() => addArc1(canvas, canvasRef)}>Arc(s) 1</Button>
                    <Button onClickHandler={() => addArc2(canvas, canvasRef)}>Arc(s) 2</Button>
                    <Button onClickHandler={() => addArc3(canvas, canvasRef)}>Arc(s) 3</Button>
                    <Button onClickHandler={() => addArc4(canvas, canvasRef)}>Arc(s) 4</Button>
                    <Button onClickHandler={() => addArc5(canvas, canvasRef)}>Transformed Paths</Button>
                </div>
            </div>


            {/* Rendering svg based shapes */}
            <div>
                <p className='text-md mb-[10px] text-[#333333]'>Add <b>SVG shapes</b> to canvas:</p>
                <div className="flex gap-4 flex-wrap">
                    <Button onClickHandler={() => add36PathsShape(canvas, canvasRef)}><b>36 </b> paths</Button>
                    <Button onClickHandler={() => addArc2(canvas, canvasRef)}>Arc(s) 2</Button>
                    <Button onClickHandler={() => addArc3(canvas, canvasRef)}>Arc(s) 3</Button>
                    <Button onClickHandler={() => addArc4(canvas, canvasRef)}>Arc(s) 4</Button>
                    <Button onClickHandler={() => addArc5(canvas, canvasRef)}>Transformed Paths</Button>
                </div>
            </div>

        </div>
    )
}


export default SimpleContent