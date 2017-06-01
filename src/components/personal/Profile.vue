<template>
    <div class="container profile-container">
        <div class="profile__title">
            <img src="../../assets/edit.png">
            <div>{{constants.editProfile}}</div>
        </div>
        <div class="raw">
            <div class="col-md-4 col-md-offset-2 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
                <h3 class="profile__input">{{constants.name}}</h3>
                <div class="profile__field">
                    <el-input placeholder="" v-model="newUser.name.model" :class="{'is-error': newUser.name.error}">
                    </el-input>
                    <div class="el-form-item__error" v-if="newUser.name.error">{{constants.enterName}}</div>
                </div>
                <h3 class="profile__input">{{constants.surname}}</h3>
                <div class="profile__field">
                    <el-input placeholder="" v-model="newUser.surname.model" :class="{'is-error': newUser.surname.error}">
                    </el-input>
                    <div class="el-form-item__error" v-if="newUser.surname.error">TEST</div>
                </div>
                <h3 class="profile__input">{{constants.birthday}}</h3>
                <div class="profile__daytime">
                    <daytime-picker v-model="newUser.birthday.model"></daytime-picker>
                </div>
                <div class="el-form-item__error" v-if="newUser.surname.error">{{constants.enterBirthday}}</div>
                <div class="profile__field">
                    <categories-picker :title="constants.interestCateg" v-model="newUser.categories.model"
                                       :class="{'is-error': newUser.categories.error}">
                    </categories-picker>
                    <div class="el-form-item__error" v-if="newUser.categories.error">{{constants.enterCategory}}</div>
                </div>
                <h3 class="profile__input">Email</h3>
                <el-input placeholder="" v-model="newUser.email.model" :disabled="true">
                </el-input>
                <h3 class="profile__input">{{constants.oldPassword}}</h3>
                <el-input placeholder="" v-model="newUser.password.model" :disabled="true">
                </el-input>
                <h3 class="profile__input">{{constants.newPassword}}</h3>
                <div class="profile__field">
                    <el-input placeholder="" v-model="newUser.newPassword.model"
                              :class="{'is-error': newUser.newPassword.error}">
                    </el-input>
                    <div class="el-form-item__error" v-if="newUser.newPassword.error">{{constants.passwordReq}}</div>
                </div>

            </div>
            <div class="col-md-6 col-md-offset-0 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
                <avatar-uploader></avatar-uploader>
                <div class="clearfix visible-md-block visible-lg-block col-balancer"></div>
            </div>
        </div>
        <div class="raw">
            <div class="col-md-4 col-md-offset-2 col-sm-6 col-sm-offset-3 col-xs-10 col-xs-offset-1">
                <div class="profile__btns">
                    <md-button class="md-raised">{{constants.cancel}}</md-button>
                    <md-button class="md-raised md-primary" @click.native="submit">{{constants.save}}</md-button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  import script from './profile.script'
  export default script
</script>

<style lang="css">
    .col-balancer {
        height: 450px;
    }
    .profile-container {
        text-align: left;
    }

    .profile__daytime {
        max-width: 300px;
        width: 100%;
    }

    .is-error input {
        border-color: #ff4949;
    }

    .profile__error {
        color: #ff4949;
        font-size: 12px;
        line-height: 1;
        padding-top: 6px;
    }

    .profile__field {
        position: relative;
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
        margin-left: 0;
        padding: 0;
        font-size: 26px;
        margin-top: 40px;
        margin-bottom: 10px;
    }

    @media (min-width: 1024px) {
        .profile__title img {
            margin-left: -150px;
        }
    }

    .profile__title img {
        width: 40px;
        display: inline-block;
        padding-bottom: 15px;
    }
    .profile__title div {
        display: inline-block;
    }
    .profile__btns {
        margin-top: 15px;
        margin-bottom: 50px;
        max-width: 300px;
        padding: 0;
    }

    .profile__btns .md-button:first-child {
        margin-left: 0;
    }
    .profile__btns .md-button:last-child {
    }

</style>
