import { useEffect, useState } from 'react'
import { getData }  from '../services/getData'

export function useGetCubePhotos(){

    const [cubePhoto,setCubePhotos] = useState()

    useEffect(() => {
        async function loadCubePhotos (){
            const response = await getData()
            setCubePhotos(response.body.cubephotos)
    
        }
        loadCubePhotos() 
    },[])

    return { cubePhoto }
}