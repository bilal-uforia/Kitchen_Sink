import Button from "../Button"
import { useCanvasContext } from "../../ContextProviders/CanvasContextProvider"

const RasterizeCanvas = () => {
    const { canvas } = useCanvasContext();


    const generateImage = () => {
        const imgElem = document.getElementById("canvasImage");
        imgElem.src = canvas.toDataURL({
            format: 'png',
            quality: 1
        })
    }

    const generateSvg = () => {
        const svgElem = document.getElementById("canvasSvg");
        const svg = canvas.toSVG();
        console.log(svg);
        svgElem.innerHTML = svg;
    }

    const generateJSON = () => {
        const json = JSON.stringify(canvas);
        console.log(json);
    }

    return (
        <div className="flex gap-2 items-baseline">
            <p className='text-md mb-[10px] text-[#333333]'>Rasterize canvas to</p>
            <div className="flex items-center gap-2">
                <Button customClass="bg-[#5bb75b] text-[#ffffff] font-semibold" onClickHandler={generateImage}
                    attributes={{ disabled: !canvas }}>Image</Button>
                <Button customClass="bg-[#5bb75b] text-[#ffffff] font-semibold" onClickHandler={generateImage}
                    attributes={{ disabled: !canvas }}>Image 3X multiplied</Button>
                <Button customClass="bg-[#5bb75b] text-[#ffffff] font-semibold" attributes={{ disabled: !canvas }}
                    onClickHandler={generateSvg}>SVG</Button>
                <Button customClass="bg-[#5bb75b] text-[#ffffff] font-semibold"
                    attributes={{ disabled: !canvas }}
                    onClickHandler={generateJSON}>JSON</Button>
            </div>
        </div>
    )
}


export default RasterizeCanvas