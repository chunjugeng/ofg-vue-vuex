import {get, post} from './fetch';

function randomStr(length) {
    var charset = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ-_.';
    var result = '';
    for (var i = length; i > 0; --i) result += charset[Math.round(Math.random() * (charset.length - 1))];
    return result;
}

class Login {
    loadCaptcha() {
       let imageId = randomStr(8);
       return 'http://testadmin.rajauang.mobi/auth/captcha?width=100&height=30&serialId=' + imageId;
    }
    submit(params) {
        
        return post('/auth/login', params);
    }
}



export default new Login();
