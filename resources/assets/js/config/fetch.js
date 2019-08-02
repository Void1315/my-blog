import axios from 'axios';

export default async (url = '', data = {}, method = 'GET',headers={}) => {
    return await new Promise((resolve, reject) => {
        console.log(data)
        axios({
            method,
            url,
            data,
            headers,
        }).then((response) => {
            resolve(response)
        }).catch((error) => {
            reject(error)
        })
    })
    
}