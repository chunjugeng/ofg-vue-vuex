<template>
    <div id="dialog" class="modal">
        <div class="dialog-modal">
            <slot></slot>
            <span class="close" @click="closeDialog"> X </span>
        </div>
    </div>
</template>
<script>
    export default {
        props: ['close', 'isOpen'],
        methods: {
            closeDialog() {
                const bodyEle= document.querySelector('body');
                this.close();
                bodyEle.classList.remove('modal-open');
            }
        },
        watch: {
            isOpen() {
                console.log(this.isOpen, 'this.watch')
            }
        },
        mounted() {
            const bodyEle= document.querySelector('body');
            if (this.isOpen) {
                bodyEle.classList.add('modal-open');
            }
        },
    }
</script>
<style lang="scss">
    body {
        &.modal-open {
            overflow: hidden;
        }
    }
    #dialog.modal {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 99999;
    }

    .dialog-slide-fade-enter-active { 
        opacity: 1;
        transition: all 0.3s ease-in;
    }
    .dialog-slide-fade-leave-active {
        transition: all .4s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .dialog-slide-fade-enter, .dialog-slide-fade-leave-to {
        opacity: 0;
        .dialog-modal {
            top: 0% !important;
        }
    }

    #dialog {
        background-color: rgba(0, 0, 0, .5);

        .dialog-modal {
            padding: 0 0 10px;
            border-radius: 5px;
            position: absolute;
            left: 50%;
            top: 50%;
            background-color: white;
            transform: translate(-50%, -50%);
            transition: all 0.7s ease-out;
            min-width: 30%;
            .close {
                position: absolute;
                right: 10px;
                top: 10px;
                cursor: pointer;
            }
            .dialog-title {
                padding: 10px;
                h5 {
                    font-size: 18px;
                    
                }
            }
            .dialog-body {
                padding: 0 10px;
                display: table;
                width: 100%;
                &.upload-file-dialog {
                    margin-top: 15px;
                }
                input, select {
                    padding-left: 10px;
                    height: 34px;
                    line-height: 34px;
                    border: 1px solid #ccc;
                    transition: all .5s ease-in;
                    &.gray_bg {
                        background-color: #ccc;
                        border: 1px solid #ccc;
                    }
                    &:focus {
                        border-color: #3079ae;
                    }
                }
                &>div.item {
                    margin-bottom: 10px;
                    padding: 0 1%;
                    display: inline-block;
                    width: 50%;
                    box-sizing: border-box;
                    
                    h6 {
                        display: inline-block;
                        margin-bottom: 5px;
                        font-weight: bold;
                        font-size: 15px;
                    } 
                    
                    input, select {
                        width: 100%;
                    }
                    
                    &.role {
                        height: auto;
                    }
                } 
                &>div.btn {
                    padding: 15px 0 20px;
                    text-align: center;
                    input[type="button"] {
                        margin-right: 10px;
                        padding: 0 15px;
                        background-color: #3079ae;
                        border-radius: 4px;
                        color: white;
                        font-size: 15px;
                        border: none;
                        cursor: pointer;
                        &:hover {
                            background-color: #2b6b98;
                        }
                    }
                }
                
                &>div.detail {
                    
                    display: table;
                    span.text {
                        padding-right: 10px;
                        display: inline-block;
                        width: 30%;
                        text-align: right;
                    }
                    
                    div.data {
                        display: inline-block;
                        width: 70%;
                        input, select, textArea {
                            width: 100%;
                        }
                        textArea {
                            height: 50px;
                        }
                    }

                    &.logo {
                        input {
                            border: none;
                        }
                    }
                }
            }
            
            
        }
        
    }
</style>