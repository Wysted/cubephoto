import axios from 'axios';


export async function getDataOne(id){
    try {
        const response = await axios({
            url: `${process.env.REACT_APP_BASE_URL}/${id}`,
            method: 'GET'
        })
        return response.data
    }catch(e){
        return e
    }
}