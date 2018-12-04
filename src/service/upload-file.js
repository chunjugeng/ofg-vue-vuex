import * as axios from 'axios';

// const BASE_URL = 'http://localhost:3000';

function upload(formData) {
    const url = `/feapi/user/avatar`;
    return axios.post(url, formData)
        .then(res => {
            return res;
        })
        .catch(err => {
            return err;
        })
}

export { upload }