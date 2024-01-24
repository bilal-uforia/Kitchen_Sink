import RasterizeCanvas from "./RasterizeCanvas"

const CanvasContent = () => {
    return (
        <div>
            <p className='text-md mb-[10px] text-[#333333]'>Canvas complexity (number of paths): <b>2</b></p>
            <RasterizeCanvas />

        </div>
    )
}

export default CanvasContent