import InputText from "./InputText";
import Button from "./Button";
import { useState } from 'react'
import { deleteData } from "../services/deleteData";
import { toast,Toaster  } from "react-hot-toast";
import { Navigate } from "react-router-dom";

function Delete({ trigger ,setTrigger, id, code}){
    const [dato,setDato] = useState()
    const [viewToast,setViewToast] = useState(false)
    const [nav,setNav] = useState(false)


    const handleClickClose = () =>{
        setTrigger(false)
    }
    const handleChangedDato = (e) => {
        setDato(e.target.value)
    }

    const handleClickDelete = async (e) => {
        e.preventDefault()

        try{
            const response = await deleteData(id,dato)
           
            if(response.status === 200){
                toast.success(response.message)
                setViewToast(true)
                setNav(true)
            }
            if(response.status === 401){
                throw new Error('El codigo no es valido para eliminar')
            }
            
        }catch(e){
            toast.error(e.message)
            setViewToast(true)
        }
        
    }

    return trigger ? (
        <form onSubmit={handleClickDelete} className="absolute left-[37%] top-1/3 shadow-2xl shadow-slate-500 bg-white p-5 text-center rounded-xl">
            {viewToast ? <Toaster /> : ""}
            { nav ? <Navigate to='/'/> : ""}
            <p className="p-2 m-1">
                Para eliminar la imagen introduzca
                <br />
                el codigo de eliminacion
            </p>
            <InputText name="code" onChange={handleChangedDato} />
            <div className="flex justify-center gap-4 m-1 p-2">
                <Button type="submit">
                    Aceptar
                </Button>
                <Button onClick={handleClickClose}>Cancelar</Button>
            </div>
        </form>
    ) : null;
}

export default Delete