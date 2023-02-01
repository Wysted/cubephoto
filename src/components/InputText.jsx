
function InputText(props){
    return (
        <input
            type="text"
            className="focus:outline-none border-b w-full  pb-1 border-sky-400 placeholder-gray-500"
            {...props}
        />
    );
}
export default InputText