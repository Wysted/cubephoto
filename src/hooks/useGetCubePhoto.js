import { useCallback, useEffect, useState } from 'react'
import { getDataOne }  from '../services/getDataOne'

export function useGetCubePhoto(id){

    const [cubePhoto,setCubePhoto] = useState()
    
    const loadCubePhoto = useCallback( async () =>{
            const id_cubephoto = id
            const response = await getDataOne(id_cubephoto)
            setCubePhoto(response.body)
        
    },[id])

    useEffect(()=>{    
        loadCubePhoto()
    },[loadCubePhoto])
    
    return cubePhoto
}