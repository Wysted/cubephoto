import axios from 'axios';


export async function deleteData(id,code){
    try {
        const response = await axios.delete(`${process.env.REACT_APP_BASE_URL}/${id}?code=${code}`)
        return response
    }catch(e){
        return e.response
    }
}