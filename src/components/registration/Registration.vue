<template>
  <div class="registration-containter">
    <h1>{{constants.registration}}</h1>
    <div class="registration_form">
      <div class="registration_raw">
  
        <div class="registration_block">
          <h3 class="profile__input">{{constants.name}}</h3>
          <div class="profile__field">
            <el-input placeholder="" v-model="newUser.name.model" :class="{'is-error': newUser.name.error}">
            </el-input>
            <div class="el-form-item__error" v-if="newUser.name.error">{{constants.enterName}}</div>
          </div>
        </div>
  
        <div class="registration_block">
          <h3 class="profile__input">{{constants.surname}}</h3>
          <div class="profile__field">
            <el-input placeholder="" v-model="newUser.surname.model" :class="{'is-error': newUser.surname.error}">
            </el-input>
            <div class="el-form-item__error" v-if="newUser.surname.error">{{constants.enterName}}</div>
          </div>
        </div>
  
      </div>
      <div class="registration_raw">
  
        <div class="registration_block pb-25">
          <h3 class="profile__input">{{constants.birthday}}</h3>
          <div class="profile__daytime">
            <daytime-picker v-model="newUser.birthday.model"></daytime-picker>
          </div>
          <div class="el-form-item__error" v-if="newUser.birthday.error">{{constants.enterBirthday}}</div>
        </div>
  
        <div class="registration_block">
          <div class="profile__field">
            <categories-picker :title="constants.interestCateg" v-model="newUser.categories.model" :class="{'is-error': newUser.categories.error}">
            </categories-picker>
            <div class="el-form-item__error" v-if="newUser.categories.error">{{constants.enterCategory}}</div>
          </div>
        </div>
      </div>
  
      <div class="registration_block__email">
        <h3 class="profile__input">Email</h3>
        <el-input placeholder="" v-model="newUser.email.model" :class="{'is-error': newUser.email.error}">
        </el-input>
      </div>
  
      <div class="submitbtn_container">
        <md-button class="md-raised md-primary" @click.native="submitForm()">
          {{constants.checkout}}
        </md-button>
      </div>
    </div>
    <div id="hidden-purchase-form">

    </div>
  </div>
</template>

<script>
import script from './registration.script'
export default script
</script>

<style lang="css" scoped>
.registration_form {
  max-width: 1500px;
  text-align: left padding 15px;
}

.registration-containter {
  display: flex;
  flex-direction: column;
  width: 100%;
  justify-content: center;
  align-items: center;
}

.submitbtn_container {
  width: 100%;
  text-align: right;
  padding: 25px;
}

.submitbtn_container button {
  font-size: 18px !important;
}

.registration_raw {
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
}

.registration_block {
  min-width: 300px;
  box-sizing: content-box;
  padding: 0 10px;
  text-align: left;
}

.pb-25 {
  padding-bottom: 25px;
}

.registration_block__email {
  max-width: 300px;
  text-align: left;
  padding: 0 10px;
  min-width: 300px;
  box-sizing: content-box;
}
.registration-containter h1 {
  margin-top: 30px;
  margin-bottom: 40px;
}

#hidden-purchase-form {
  display: none;
}

</style>
