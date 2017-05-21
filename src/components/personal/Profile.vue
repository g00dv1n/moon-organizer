<template>
    <div class="profile-container">
        <div class="profile__title">
            <img src="../../assets/edit.png">
            <div>Редактирование профиля</div>
        </div>
        <div class="raw">
            <div class="col-md-4 col-md-offset-2 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
                <h3 class="profile__input">Имя</h3>
                <el-input placeholder="" v-model="name">
                </el-input>
                <h3 class="profile__input">Фамилия</h3>
                <el-input placeholder="" v-model="surname">
                </el-input>
                <h3 class="profile__input">Дата и время рождения</h3>
                <el-date-picker
                        v-model="birthday"
                        type="datetime"
                        placeholder="">
                </el-date-picker>
                <categories-picker title="Интересующие категории:">
                </categories-picker>
            </div>
            <div class="col-md-6 col-md-offset-0 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
                <avatar-uploader></avatar-uploader>
            </div>
        </div>
    </div>
</template>

<script>
  import script from './profile.script'
  export default script
</script>

<style lang="css">
    .profile-container {
        text-align: left;
    }

    .profile-container .el-input
    {
        max-width: 300px !important;
        width: 100% !important;
    }

    .profile__input  {
        font-size: 20px !important;
    }
    .profile__title {
        text-align: center;
        width: 100%;
        margin-left: 0;
        padding: 0;
        font-size: 26px;
        margin-top: 40px;
        margin-bottom: 10px;
    }

    .profile__title img {
        width: 40px;
        display: inline-block;
        padding-bottom: 15px;
    }
    .profile__title div {
        display: inline-block;
    }

</style>
