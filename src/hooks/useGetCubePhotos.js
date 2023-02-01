import { useState } from 'react'
import { getData }  from '../services/getData'

export function useGetCubePhotos(){

    const [cubePhoto,setCubePhotos] = useState()

    async function loadCubePhotos (){
        const response = await getData()
        setCubePhotos(response.body.cubephotos)
        
    }

    return { cubePhoto, loadCubePhotos }
}