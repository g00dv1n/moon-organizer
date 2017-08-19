<template>
  <div class="thanks">
    <h1>{{constants.thanksTitle}}
      <i class="fa fa-smile-o" aria-hidden="true"></i>
    </h1>
    <h3>{{constants.thanksDesc}}</h3>
    <div class="contacts">
      {{constants.supportTeam}} {{constants.supportTeamText}}: moon.organizer@gmail.com / +38 (050) 860-46-24
    </div>
  </div>
</template>

<script>
import script from './thankyou-page.script'
export default script
</script>

<style lang="scss" scoped>
.thanks {
  margin-top: 125px;
  h3 {
    white-space: pre-wrap;
  }
  .contacts {
    font-size: 14px;
    font-weight: 400;
    line-height: 1.5;
    margin-top: 75px;
    margin-bottom: 50px;
}
}
</style>
