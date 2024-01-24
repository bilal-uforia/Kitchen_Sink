

const ImagesRendrer = () => {
    return (
        <div className="flex flex-col">
            <div className="mb-3">
                <p className='text-md mb-[10px] text-[#333333]'>rasterized canvas:</p>
                <img id="canvasImage" alt="" />
            </div>
            <div>
                <p className='text-md mb-[10px] text-[#333333]'>svg canvas:</p>
                <div id="canvasSvg"></div>
            </div>
        </div>
    )
}

export default ImagesRendrer