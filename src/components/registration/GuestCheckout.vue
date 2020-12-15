<template>
  <div class="guest-checkout-containter">
    <div id="hidden-purchase-form">
    </div>
  </div>
</template>

<script>
import script from './guestcheckout.script'
export default script
</script>

<style lang="css" scoped>
  .guest-checkout-containter {
    position: fixed;
    top: 0;
    left: 0;
    background-color: white;
    width: 100%;
    height: 100%;
    z-index: 99999;
  }

  #hidden-purchase-form {
    display: none;
  }
</style>
