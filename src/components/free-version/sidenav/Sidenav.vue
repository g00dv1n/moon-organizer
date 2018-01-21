<template>
  <div>
    <md-toolbar md-theme="white">
        <div class="logo" v-if="isCalendarView">
            <img :src="logoPath">
        </div>
        <router-link class="logo" to="/" v-else>
            <img :src="logoPath">
        </router-link>
    </md-toolbar>
    <md-list>
      <md-list-item>
      <span class="main-title">{{constants.lunarCalendar}} {{currentYear}}</span>
        <md-list-expand>
          <md-list>
              <md-button 
                v-for="t in types"
                :key="t.name"
                @click.native="goToCategory(t.name)"
                :class="['md-primary', 'category', {'active': isCurrentType(t.name)}]">
                  {{t.text}}
              </md-button>
          </md-list>
        </md-list-expand>
      </md-list-item>
    </md-list>

  </div>
</template>

<script>
import script from './sidenav.script'
export default script
</script>

<style lang="css">
.main-title {
  font-size: 16px;
  text-align: left;
  margin-left: 0! important;
  font-weight: 500;
  color: black;
  text-transform: uppercase;
  width: 100%;
  text-align: left;
}
</style>
