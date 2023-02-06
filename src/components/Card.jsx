import { AiOutlineCopy } from 'react-icons/ai';
import { toast, Toaster } from 'react-hot-toast';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

function Card({ name, title, x, y, z, descrip, created, img , id}){
    const [viewNotification,setViewNotification] = useState(false)
    const handleClickCopy = async () =>{
        await navigator.clipboard.writeText(`x: ${x} - y: ${y} - z: ${z}`).then(() =>{
            toast.success(`Las cordenadas fueron copiadas con exito x: ${x} - y: ${y} - z: ${z}.`)
            setViewNotification(true)
        })
    }
    
    return (
        <div className="relative h-full w-full mx-auto m-4 shadow-lg">
            {viewNotification ? <Toaster /> : ""}
            <div className=" shadow-lg  rounded-lg bg-slate-50 h-full flex flex-col justify-evenly p-4">
                <div className="flex relative rounded-lg overflow-hidden h-52 ">
                    <Link
                        to={`/${id}`}
                        className="absolute inset-0 grid justify-items-stretch cursor-pointer"
                    >
                        <LazyLoadImage
                            src={img}
                            alt="Imagen minecraft"
                            className="object-fill"
                            effect='blur'
                        />
                    </Link>
                </div>
                {/* Titulo y cordenadas */}
                <div className="mt-4 text-center ">
                    <h2 className=" font-medium text-base md:text-lg text-gray-800 line-clamp-1">
                        {title}
                    </h2>
                    <p className="flex mt-2 text-gray-800 text-2xl justify-center">
                        <span className="mx-2">x : {x}</span>
                        <span className="mx-2">y : {y}</span>
                        <span className="mx-2">z : {z}</span>
                        <AiOutlineCopy
                            className="h-8 w-8 cursor-copy text-sky-300"
                            onClick={handleClickCopy}
                        />
                    </p>
                </div>
                {/* Descripcion */}
                <div className="mt-8 h-max">
                    <p className="inline-flex flex-col xl:flex-row xl:items-center text-gray-800 p-2">
                        <span className="mt-2 xl:mt-0">{descrip}</span>
                    </p>
                </div>
                {/* Nombre */}
                <div className="grid grid-cols-2 mt-8">
                    <div className="flex items-center">
                        <p className="ml-2 text-gray-800 line-clamp-1 text-xl">
                            {name}
                        </p>
                    </div>
                    {/* Fecha de creacion */}
                    <div className="flex justify-end">
                        <p className="inline-block font-semibold whitespace-nowrap rounded-xl">
                            <span className="text-lg">{created}</span>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card