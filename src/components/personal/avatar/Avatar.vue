<template>
    <div>
        <div class="avatar-container">
            <el-upload
                    class="avatar-uploader"
                    action="https://jsonplaceholder.typicode.com/posts/"
                    :show-file-list="false"
                    :on-change="onChange"
                    :auto-upload="false"
                    accept="image/*"
                    ref="uploader"
                >
                <i v-if="!file.url || isSuccesUpload" class="el-icon-plus avatar-uploader-icon"></i>
            </el-upload>
            <div class="alert-container">
                <el-alert
                        :title="constants.uploadingSucces"
                        type="success"
                        show-icon
                        v-if="isSuccesUpload">
                </el-alert>
                <el-alert
                        :title="errorMsg"
                        type="error"
                        show-icon
                        v-if="errorMsg">
                </el-alert>
            </div>

            <div v-if="file.url && !isSuccesUpload">
                <img :src="file.url" id="avatar" ref="avatar">
            </div>
        </div>
        <md-button class="md-raised md-primary" v-if="file.url" @click.native="sendToServer()">{{constants.upload}}</md-button>
        <md-button class="md-raised md-warn" v-if="file.url && !isSuccesUpload" @click.native="cancelCrop()">
            {{constants.cancel}}
        </md-button>
    </div>

</template>

<script>
  import script from './avatar.script'
  export default script
</script>

<style lang="css">
    .avatar-uploader .el-upload {
        border: 1px dashed #d9d9d9;
        background-color: whitesmoke;
        border-radius: 6px;
        cursor: pointer;
        position: relative;
        overflow: hidden;
    }
    .avatar-uploader .el-upload:hover {
        border-color: #20a0ff;
    }

    .el-upload__input {
        display: none !important;
    }

    .avatar-uploader-icon {
        font-size: 28px;
        color: #8c939d;
        width: 178px;
        height: 178px;
        text-align: center;
    }
    .avatar-uploader-icon:before {
        line-height: 178px;
    }

    .avatar-container {
        width: 300px;
        margin: 6px;
    }

    .alert-container {
        margin-top: 15px;
        margin-bottom: 15px;
    }

</style>
