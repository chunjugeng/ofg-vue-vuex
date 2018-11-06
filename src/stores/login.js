
import loginService from '~/service/login';
const login = {
    ONCHANGE: 'CHANGE',
    REFRESHCAPTCHA: 'REFRESHCAPTCHA'
};
export default {
    state: {
        phone: '',
        password: '',
        captcha: '',
        captchaUrl: ''
    },
    mutations: {
        [login['ONCHANGE']](state, event) {
            const name = event.currentTarget.name;
            const val = event.currentTarget.value;
            state[name] = val;
        },
        [login['REFRESHCAPTCHA']](state, captchaUrl) {
            state.captchaUrl = captchaUrl;
        }
    },
    actions: {
        onChange({commit}, event) {
            commit(login['ONCHANGE'], event);
        },
        refreshCaptcha({commit}) {
            const captchaUrl = loginService.loadCaptcha();
            commit(login['REFRESHCAPTCHA'], captchaUrl);
        },
        
    }
}