<template>
    <md-dialog class="md-dialog-alert" ref="dialog" @close="fireCloseEvent()">
        <md-dialog-content>
            <div class="login-modal__content">
                <md-input-container :class="{'md-input-invalid': isEmailInvalid}">
                    <md-icon>email</md-icon>
                    <label>{{constants.enterEmail}}</label>
                    <md-input v-model="user.email" required></md-input>
                    <span class="md-error">{{constants.invalidEmail}}</span>
                </md-input-container>
                <md-input-container :class="{'md-input-invalid': isPasswordInvalid}" md-has-password>
                    <md-icon>lock</md-icon>
                    <label>{{constants.enterPassword}}</label>
                    <md-input type="password" v-model="user.password" required></md-input>
                    <span class="md-error">{{constants.invalidPasswordLength}}</span>
                </md-input-container>
                <div class="login-error" v-if="isLoginError">{{constants.invalidLogin}}</div>
            </div>
        </md-dialog-content>

        <md-dialog-actions>
            <md-button class="md-raised md-primary" @click.native="submit()" :disabled="!isReadyForSubmit">
                OK
            </md-button>
        </md-dialog-actions>
    </md-dialog>
</template>

<script>
  import emailValidator from 'email-validator'

  export default {
    data () {
      return {
        debounce: false,
        isLoginError: false,
        user: {
          email: null,
          password: null
        }
      }
    },
    computed: {
      isEmailInvalid () {
        return this.user.email === null ? false : !emailValidator.validate(this.user.email)
      },
      isPasswordInvalid () {
        return this.user.password === null ? false : this.user.password.length < 8
      },
      isReadyForSubmit () {
        return this.user.email && this.user.password && !this.isEmailInvalid && !this.isPasswordInvalid
      },
      constants () {
        return this.$store.getters.constants
      }
    },
    methods: {
      fireCloseEvent    () {
        if (!this.debounce) {
          this.$emit('close')
        }
      },
      open  () {
        this.$emit('open')
        this.debounce = false
        this.$refs.dialog.open()
      },
      close () {
        this.fireCloseEvent()
        this.debounce = true
        this.$refs.dialog.close()
      },
      submit () {
        const self = this
        console.warn(this.user)
        this.$store.dispatch('login', self.user)
          .then((res) => {
            self.isLoginError = false
            self.close()
            self.$router.push({name: 'personal'})
          })
          .catch((err) => {
            console.log(err)
            self.isLoginError = true
          })
      }
    }
  }
</script>
<style scoped>
    .login-modal__content {
        width: 400px;
    }

    .login-error {
        color: #fafafa;
        text-align: center;
        font-size: 17px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: crimson;
    }
</style>
