

const Button = ({ children, customCLass, bgColor, onClickHandler }) => {
    return (
        <button className={`py-[4px] px-[14px] text-sm border-[1px] border-[#000000]/15 border-solid rounded-[4px]  
        ${bgColor || "bg-[#f5f5f5]"} ${customCLass}`}
            onClick={onClickHandler}>
            {children}
        </button>
    )
}

export default Button