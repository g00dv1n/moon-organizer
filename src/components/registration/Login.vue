<template>
  <div class="login-containter">
    <div class="login-form">
      <h1>{{constants.logInToCalendar}}</h1>
      <md-input-container>
          <md-icon>email</md-icon>
          <label>{{constants.enterEmail}}</label>
          <md-input v-model="user.email" required></md-input>
      </md-input-container>
      <md-input-container md-has-password>
          <md-icon>lock</md-icon>
          <label>{{constants.enterPassword}}</label>
          <md-input type="password" v-model="user.password" required></md-input>
      </md-input-container>
      <md-button
        class="md-raised md-primary login-submit"
        @click.native="submit()"
      >
          {{constants.logIn}}
      </md-button>
      <div class="login-error" v-if="isLoginError">{{constants.invalidLogin}}</div>
    </div>
  </div>
</template>

<script>
import script from './login.script'
export default script
</script>

<style lang="css" scoped>
  .login-containter {
    display: flex;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fafafa;
    width: 100%;
    height: 100%;
    z-index: 99999;
  }

  .login-error {
    color: crimson;
    text-align: center;
    font-size: 14px;
    padding-top: 10px;
    padding-bottom: 10px;
    margin-bottom: 10px;
  }

  .login-form {
    max-width: 500px;
    width: 100%;
    margin-top: 100px;
    margin-left: 10px;
    margin-right: 10px;
  }

  .login-submit {
    width: 100%;
    margin: 0;
  }

  h1 {
    margin-bottom: 25px;
  }
</style>
