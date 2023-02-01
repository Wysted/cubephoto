
function Button (props, {children}){
    return (
        <button className=" text-xl bg-sky-400 text-white py-3 px-4 flex items-center rounded-lg hover:bg-sky-700" {...props}>
            
        </button>
    );
}

export default Button