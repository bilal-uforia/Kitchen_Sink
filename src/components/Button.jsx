

const Button = ({ children, customClass, bgColor, onClickHandler, attributes }) => {
    return (
        <button className={`py-[4px] px-[14px] text-sm border-[1px] border-[#000000]/15 border-solid rounded-[4px]  
        ${bgColor || "bg-[#f5f5f5]"} ${customClass}`}
            onClick={onClickHandler} {...attributes}>
            {children}
        </button>
    )
}

export default Button