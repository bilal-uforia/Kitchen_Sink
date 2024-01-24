import Button from "../Button"

const RasterizeCanvas = () => {
    return (
        <div className="flex gap-2">
            <p className='text-md mb-[10px] text-[#333333]'>Rasterize canvas to</p>
            <div className="flex">
                <Button customClass="bg-[#5bb75b] text-[#ffffff] font-semibold">Image</Button>
            </div>
        </div>
    )
}

export default RasterizeCanvas