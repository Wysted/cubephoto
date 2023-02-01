import { useState } from "react";
import { HiUpload } from "react-icons/hi";
import formSchema from "../validation/formSchema.js";
import { toast, Toaster } from 'react-hot-toast';
import { postData } from "../services/postData"


function Form(){
    const [viewToast,setViewToast] = useState(false)

    const [datos,setDatos] = useState({
        name : "",
        title : "",
        x : NaN,
        y : NaN,
        z : NaN,
        description : " ",
        image : null
    })

   
    const handleFileChange = (e) =>{
        const file = e.target.files[0]
        setDatos({
            ...datos,
            image : file
        })
        
    }

    const handleInputChange = (e) =>{
        setDatos({
            ...datos,
            [e.target.name] : e.target.value
        }) 
    }
    const enviarDatos = async (e) => {
        e.preventDefault()
        
        try{
            const validate = await formSchema.validate(datos)
            if(validate){
                const code = await postData(validate)
                toast.success(`La imagen fue subida de manera exitosa y su codigo de eliminacion es ${code.code}, y ya se encuentra en el portapapeles`)
                await navigator.clipboard.writeText(code.code);
                setViewToast(true)
            }
        }catch(error){
            toast.error(error.message)
            setViewToast(true)
        }
    }
    

    

    return (
        <form
            className="bg-white py-6 h-1/2 px-10 sm:max-w-md shadow-xl mt-20"
            onSubmit={enviarDatos}
        >
            {viewToast ? <Toaster /> : ""}
            <div className="grid gap-6  sm:grid-cols-3">
                <div className="relative col-start-1 z-0">
                    <input
                        type="text"
                        name="name"
                        className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                        placeholder=" "
                        onChange={handleInputChange}
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                        Nombre
                    </label>
                </div>

                <div className="relative col-start-2 col-span-2 z-0">
                    <input
                        type="text"
                        name="title"
                        className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                        placeholder=" "
                        onChange={handleInputChange}
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                        Titulo
                    </label>
                </div>

                <div className="relative z-0">
                    <input
                        type="number"
                        name="x"
                        className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                        placeholder=" "
                        onChange={handleInputChange}
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                        Cordenada X
                    </label>
                </div>

                <div className="relative z-0">
                    <input
                        type="number"
                        name="y"
                        className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                        placeholder=" "
                        onChange={handleInputChange}
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                        Cordenada Y
                    </label>
                </div>

                <div className="relative z-0">
                    <input
                        type="number"
                        name="z"
                        className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                        placeholder=" "
                        onChange={handleInputChange}
                    />
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                        Cordenada Z
                    </label>
                </div>

                <div className="relative z-0 col-start-1 col-span-3">
                    <textarea
                        name="description"
                        rows="3"
                        className="peer block w-full appearance-none border-0 border-b border-gray-500 bg-transparent py-2.5 px-0 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0"
                        placeholder=" "
                        onChange={handleInputChange}
                    ></textarea>
                    <label className="absolute top-3 -z-10 origin-[0] -translate-y-6 scale-75 transform text-sm text-gray-500 duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:left-0 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-blue-600 peer-focus:dark:text-blue-500">
                        Descripcion
                    </label>
                </div>

            </div>
            
            <div className="mt-3 w-full h-16">
                <label className="">
                    <HiUpload className="cursor-pointer border-2  border-gray-500 w-full h-full text-gray-900 rounded-lg hover:text-white hover:bg-sky-400 hover:border-sky-400" />

                    <input type="file" name="image" className="hidden" onChange={handleFileChange}/>
                </label>
            </div>
            <button
                type="submit"
                className="mt-2 rounded-md w-full bg-black px-10 py-2 text-white"
            >
                Subir imagen
            </button>
        </form>
    );
}

export default Form