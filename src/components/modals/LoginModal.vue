<template>
    <md-dialog class="md-dialog-alert" ref="dialog" @close="fireCloseEvent()">
        <md-dialog-content>
            <div class="login-modal__content" v-if="isNormal">
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
            <div class="login-modal__content" v-if="isReset">
                <div class="reset-title">{{constants.resetTitle}}</div>
                <md-input-container :class="{'md-input-invalid': isEmailInvalid}">
                    <md-icon>email</md-icon>
                    <label>{{constants.enterEmail}}</label>
                    <md-input v-model="user.email" required></md-input>
                    <span class="md-error">{{constants.invalidEmail}}</span>
                </md-input-container>
                <div v-if="showResetTooltip">
                    <div class="reset-tooltip">{{constants.resetTooltip}}</div>
                    <div class="resend-btn" @click="reset()">{{constants.resendPass}}</div>
                </div>
                <div class="reset-tooltip" v-if="notFoundMail">
                    {{constants.notFoundMail}}
                </div>
            </div>
        </md-dialog-content>

        <md-dialog-actions>
            <md-button
                    class="md-raised md-primary login-submit"
                    @click.native="submit()"
                    :disabled="!isReadyForSubmit"
                    v-if="isNormal">
                OK
            </md-button>
            <md-button
                    class="md-raised md-primary"
                    @click.native="reset()"
                    :disabled="isEmailInvalid"
                    v-if="isReset">
                OK
            </md-button>
        </md-dialog-actions>
        <div class="some-actions" v-if="isNormal">
            <div class="reset-link" @click="resetPasswordState">{{constants.forgetPassword}}</div>
            <div class="singup-link">{{constants.signUp}}</div>
        </div>
    </md-dialog>
</template>

<script>
  import emailValidator from 'email-validator'

  export default {
    data () {
      return {
        state: 'normal',
        debounce: false,
        showResetTooltip: false,
        notFoundMail: false,
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
      isNormal () {
        return this.state === 'normal'
      },
      isReset () {
        return this.state === 'reset'
      },
      constants () {
        return this.$store.getters.constants
      }
    },
    methods: {
      resetPasswordState () {
        this.state = 'reset'
      },
      fireCloseEvent    () {
        // reset some states
        this.state = 'normal'
        this.showResetTooltip = false
        this.notFoundMail = false

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
      reset () {
        this.$store.dispatch('resetPassword', this.user.email)
          .then((res) => {
            this.showResetTooltip = true
            this.notFoundMail = false
          })
          .catch((err) => {
            if (err.response.status === 404) {
              this.notFoundMail = true
            }
          })
      },
      submit () {
        const self = this
        console.warn(this.user)
        this.$store.dispatch('login', self.user)
          .then((res) => {
            self.isLoginError = false
            self.close()
            // self.$router.push({name: 'personal'})
            window.location.href = '/'
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
    .login-submit {
        position: absolute;
        right: 15px;
        bottom: 40px;
    }

    .reset-title {
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 5px;
    }

    .reset-tooltip {
        font-size: 14px;
        margin-bottom: 5px;
        font-style: italic;
    }

    .resend-btn {
        cursor: pointer;
        color: #1c8de0;
    }

    .resend-btn:hover {
        cursor: pointer;
        color: #1c8de0;
        text-decoration: underline;
    }

    .some-actions .reset-link{
        position: absolute;
        left: 15px;
        bottom: 10px;
    }

    .some-actions .singup-link {
        position: absolute;
        right: 15px;
        bottom: 10px;
    }

    .some-actions > * {
        cursor: pointer;
        color: #1c8de0;
    }

    .some-actions > *:hover {
        text-decoration: underline;
    }

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
