import { useParams } from "react-router-dom"
import { useGetCubePhoto } from '../hooks/useGetCubePhoto'
import { AiFillDelete } from 'react-icons/ai';
import { useState } from "react";
import DeleteCubePhoto from '../components/DeleteCubePhoto'

// AiFillDelete
function CubePhoto(){
    const { id } = useParams()
    const cubePhoto = useGetCubePhoto(id)
    const [buttonDelete,setButtonDelete] = useState(false)
    // const click = () =>{
    //     console.log(cubePhoto.cubephoto.pic)
    // }

    const newDate = (date) =>{
        const parts = date.split(" ")
        const _newDate = parts[0]
        return _newDate
    }

    const handleClickDelete = () =>{
        setButtonDelete(true)
    }
    

    return cubePhoto ? (
        <div className="relative block p-6 overflow-hidden bg-white border-slate-100 rounded-lg h-3/6 w-4/6">
            <span className="absolute inset-x-0 bottom-0 h-2 bg-gradient-to-r from-green-300 via-blue-500 to-purple-600"></span>
            <div >
                <div className="flex flex-row justify-between items-end p-2">
                    <span className="font-bold text-4xl">
                        {cubePhoto.cubephoto.name}
                    </span>
                    <span className="text-xl">
                        {cubePhoto.cubephoto.title}
                    </span>
                    <span className="text-lg">x : {cubePhoto.cubephoto.x}</span>
                    <span className="text-lg">y : {cubePhoto.cubephoto.y}</span>
                    <span className="text-lg">z : {cubePhoto.cubephoto.z}</span>
                </div>
                <img
                    src={cubePhoto.cubephoto.pic}
                    alt={cubePhoto.cubephoto.name}
                    className=" rounded-lg m-1"
                />
                <div className="flex flex-col font-bold text-4xl">
                    <span className="flex flex-row justify-center gap-5 items-end">
                        {newDate(cubePhoto.cubephoto.created)}
                        <AiFillDelete className="text-gray-500 cursor-pointer hover:text-gray-700" onClick={handleClickDelete}/>
                    </span>
                    <p className="font-normal text-2xl text-justify p-2">
                        {cubePhoto.cubephoto.description}
                    </p>
                </div>
            </div>
            <DeleteCubePhoto trigger={buttonDelete} setTrigger={setButtonDelete} id={cubePhoto.cubephoto.id}/>
        </div>
    ) : null;
}   

export default CubePhoto