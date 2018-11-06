<template>
    <div class="login-comp">
        <div class="content">
            <div class="login-from">
                <h1>Management</h1>
                
                <div class="from-content">
                    <p>Login</p>
                    <form name="login">
                        <div class="group-input">
                            <input type="text" name="phone"  placeholder="Mobile" @input="onChange"/><span class="fa fa-mobile" />
                        </div>
                        <div class="group-input">
                            <input type="text" name="password" placeholder="Password" @input="onChange"/><span class="fa fa-lock" />
                        </div>
                        <div class="group-input">
                            <input type="text" name="captcha" placeholder="Captcha" @input="onChange"/>
                            <div class="captcha">
                                <img :src="captchaUrl" />
                                <span @click="refreshCaptcha">change</span>
                            </div>
                        </div>

                        <div class="btn">
                            <button class="login-btn"  @click="submit">login</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import loginService from '~/service/login';
    import {mapState, mapActions, mapGetters} from 'vuex';
    export default {
        computed: {
            ...mapState({
                phone: state=> state.login.phone,
                password: state=> state.login.password,
                captcha: state=> state.login.captcha,
                captchaUrl: state=> state.login.captchaUrl
            })
        },
        methods: {
            onChange(e) {
                this.$store.dispatch('onChange', e);
            },
            refreshCaptcha() {
                this.$store.dispatch('refreshCaptcha');
            },
            submit(e) {
                const params = {
                    mobile: this.phone, 
                    password: this.password,
                    answer: this.captcha
                };
                loginService.submit(params).then(res=> {
                });
                e.preventDefault();
            }
        },
        mounted() {
            this.$store.dispatch('refreshCaptcha');
        },
    }
</script>

<style lang="sass">
 .login-comp {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #d2d6de;
    .content {
        margin: 0 auto;
        width: 370px; 
        height: 100%;
        .login-from {
            position: relative;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            h1 {
                font-size: 35px;
                text-align: center;
                margin-bottom: 25px;
                font-weight: 300;
            }
            .from-content {
                background-color: white;
                padding: 20px;
                text-align: center;
                p {
                    margin: 0;
                    text-align: center;
                    padding: 0 20px 20px 20px;
                }
                .group-input {
                    margin-bottom: 15px;
                    input {
                        display: inline-block;
                        width: 290px;
                        height: 34px;
                        text-indent: 12px; 
                        font-size: 14px;
                        line-height: 1.428571429;
                        color: #555;
                        vertical-align: middle;
                        background-color: #fff;
                        border: 1px solid #ccc;
                        &:focus {
                            border: 1px solid #2b6b98;
                            -webkit-box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
                            box-shadow: inset 0 1px 1px rgba(0,0,0,0.075);
                            -webkit-transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
                            transition: border-color ease-in-out .15s,box-shadow ease-in-out .15s;
                        }
                        &[name=captcha] {
                            width: 320px;
                        }
                    }
                    
                    span {
                        line-height: 34px;
                        width: 30px;
                        border: 1px solid #ccc;
                        border-left: 0;
                        vertical-align: middle;
                        font-size: 14px;
                        margin-right: 0;
                        text-align: center;
                        &:before {
                            margin-left: 9px !important;
                        }
                    }
                }
                .btn {
                    button {
                        width: 33%;
                        line-height: 34px;
                        background-color: #3c8dbc;
                        color: white;
                        border: none;
                        cursor: pointer;
                    }
                }
            }
        }
    }
     
 }   
</style>