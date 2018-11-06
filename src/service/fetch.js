import axios from 'axios';
import qs from 'qs';
var instance = axios.create({
    headers: {'content-type': 'application/x-www-form-urlencoded'}
})
function get(url, params) {
    return new Promise((resolve, reject)=> {
        axios.get(url, {
            params: {...params}
        }).then((response)=> {
            return resolve({...response.data.content});
        }).catch(err=> reject(err));
    });
}

function post(url, params) {
    return new Promise((resolve, reject)=> {
        axios.post(url, {...params})
            .then(response=> resolve({...response.data.content}))
            .catch(err=> reject(err));
    })
}


const fetch = (params)=> {
    return new Promise((resolve, reject)=> {
        axios[params.method || 'get'](params.url, {...params.data})
            .then(response=> {
                resolve({...response.data.content});
            })
            .catch(err=> reject(err));
    })
}
export {get, post, fetch};