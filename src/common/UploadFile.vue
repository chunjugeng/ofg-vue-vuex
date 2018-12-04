<template>
    <div class="upload-file">
        <span class="logo-text">Logo</span>
        <div class="upload">
            <input type="file" @change="uploadFile" name="uploadPhotos" accept="image/*" >
            <span>
                <img :src="uploadedFiles.url"/>
            </span>
        </div>
    </div>
</template>

<script>
    import {mapState} from 'vuex';
    // import {upload} from '~/service/upload-file';
    import {upload} from '~/service/upload-file.mock';
    
    const regFile = /^(?:image\/(bmp|gif|jpg|png|jpeg))$/i;
    const max_Size = 5 * 1024 * 1024;
    // var rFilter = /^(?:image\/bmp|image\/gif|image\/jpg|image\/png|image\/jpeg)$/i;
    // var uploadUrl = '/api/v2/realnamereview/image';
    export default {
        data() {
            return {
                uploadedFiles: {},
            }
        },
        methods: {
            savePhotos(formData) {
                upload(formData).then(res=> {
                    this.uploadedFiles = {...res[0]};
                });
            },
            uploadFile(ev) {
                const fileName = ev.currentTarget.name;
                const fileList = ev.target.files;
                const file = fileList['0'];

                const formData = new FormData();
                if (!fileList.length) return;

                if (!regFile.test(file.type) || file.size > max_Size ) {
                    console.log('图片过大或不符合格式要求，请重新上传');
                    this.uploadedFiles = [];
                    return;
                }

                Array.from(Array(fileList.length).keys())
                .map(x => {
                    formData.append(fileName, fileList[x], fileList[x].name);
                });
                this.savePhotos(formData);
                
            }
        }
    }
</script>

<style lang="scss">
    .upload-file {
        height: 70px;
        display: table;
        span.logo-text {
            padding-right: 10px;
            width: 30%;
            text-align: right;
        }
        span.logo-text, &>div {
            display: table-cell;
        }
        & > div.upload {
            width: 100%;
            display: table;
            & >input[type="file"], & > span {
                
                display: inline-block;
                
            }
            & > input[type="file"] {
                width: 60%;
                border: 0 !important;
                
            }
            & > span {
                width: 40%;
                
                img {
                    height: 100%;
                    width: 100%;
                }
            }
            
        }
    }
</style>
