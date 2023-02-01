import axios from 'axios';


export async function postData(imageData){
    try {
        const formData = new FormData()

        formData.append('name',imageData.name)
        formData.append('title',imageData.title)
        formData.append('x',imageData.x)
        formData.append('y',imageData.y)
        formData.append('z',imageData.z)
        formData.append('description',imageData.description)
        formData.append('image',imageData.image)
        const response = await axios({
            url: `${process.env.REACT_APP_BASE_URL}`,
            method: 'POST',
            data : formData,
            headers : {
                "Content-Type" : "multipart/form-data"
            }
        })
        return response.data.body.createdRecord
    }catch(e){
        return e
    }
}

