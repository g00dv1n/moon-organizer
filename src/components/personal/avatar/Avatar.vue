<template>
    <div>
        <el-upload
                class="avatar-uploader"
                action="https://jsonplaceholder.typicode.com/posts/"
                :show-file-list="false"
                :on-change="onChange"
                :auto-upload="true">
            <i v-if="!imageUrl" class="el-icon-plus avatar-uploader-icon"></i>
        </el-upload>
        <div class="avatar" v-if="imageUrl">
            <img :src="imageUrl" id="avatar">
        </div>
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
    .avatar {
        text-align: left;
        width: 300px;
    }

</style>
