import axios from 'axios';


export async function getData(){
    try {
        const response = await axios({
            url: `${process.env.REACT_APP_BASE_URL}`,
            method: 'GET'
        })
        return response.data
    }catch(e){
        return e
    }
}