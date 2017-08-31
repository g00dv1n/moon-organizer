<template>
  <div class="sidenav">
    <div class="logo" @click="goToProfile()">
      <img :src="userAvatar">
    </div>
    <md-list class="md-dense sidenav__list">
      <md-list-item style="margin-bottom: 15px;">
        <span class="sidenav__client">{{user.name}} {{user.surname}}</span>
        <md-list-expand>
          <md-list>
            <md-list-item class="sidenav__child">
              <router-link :to="{ name: 'lunar-birthday' }">
                <div class="sidenav__item">{{constants.lunarBirthday}}</div>
              </router-link>
            </md-list-item>
            <md-list-item class="sidenav__child">
              <router-link :to="{ name: 'zodiac-birthday' }">
                <div class="sidenav__item">{{constants.lunarZodiacSign}}</div>
              </router-link>
            </md-list-item>
            <md-list-item class="sidenav__child">
              <router-link :to="{ name: 'profile' }">
                <div class="sidenav__item">{{constants.editProfile}}</div>
              </router-link>
            </md-list-item>
            <md-list-item class="sidenav__child">
              <router-link :to="{ name: 'default' }" @click.native="logOut()">
                <div class="sidenav__item">{{constants.logOut}}</div>
              </router-link>
            </md-list-item>
          </md-list>
        </md-list-expand>
      </md-list-item>
      <md-list-item>
        <router-link to="/">
          <div class="sidenav__item">{{constants.myCalendar}}</div>
        </router-link>
      </md-list-item>
      <md-list-item>
        <router-link :to="{ name: 'biorhythms' }">
          <div class="sidenav__item">{{constants.myBiorhythms}}</div>
        </router-link>
      </md-list-item>
      <md-list-item>
        <router-link :to="{ name: 'todo-my' }">
          <div class="sidenav__item">{{constants.myTodoList}}</div>
        </router-link>
      </md-list-item>
      <md-list-item>
        <router-link :to="{ name: 'calc' }">
          <div class="sidenav__item">{{constants.lunarDaysCalc}}</div>
        </router-link>
      </md-list-item>
      <hr>
      <md-list-item>
        <a :href="constants.termOfUseLink">
          <div class="sidenav__item">{{constants.termOfUse}}</div>
        </a>
      </md-list-item>
      <md-list-item>
        <a :href="constants.privacyPolicyLink">
          <div class="sidenav__item">{{constants.privacyPolicy}}</div>
        </a>
      </md-list-item>
      <md-list-item>
        <a :href="constants.refundPolicyLink">
          <div class="sidenav__item">{{constants.refundPolicy}}</div>
        </a>
      </md-list-item>
    </md-list>
  </div>
</template>

<script>
import script from './sidenav.script'
export default script
</script>

<style lang="css">
.logo {
  cursor: pointer;
}

.sidenav__list {
  margin-left: 15px;
}

.sidenav__item {
  font-size: 14px;
  font-weight: 500;
  color: black;
  text-transform: uppercase;
}

.sidenav__child {
  font-size: 13px;
  font-weight: 500;
  padding-left: 10px;
}

.sidenav__client {
  font-size: 16px;
  font-weight: 700;
  color: #3f51b5;
  text-transform: uppercase;
  width: 100%;
  text-align: left;
}
</style>
