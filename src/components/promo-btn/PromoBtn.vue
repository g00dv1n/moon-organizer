<template>
  <div id="promo-btn" @click="onClick" v-if="isVisible">
    <div class="desc">Вам подарок!>></div>
    <img src="../../assets/gift.png" alt="">
  </div>
</template>

<script>
import script from './promo-btn.script'
export default script
</script>

<style lang="scss" scoped>
@mixin promo-btn($size, $font-size) {
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
  }
  position: fixed;
  cursor: pointer;
  z-index: 1000;
  right: 30px;
  bottom: 20px;
  width: $size;
  height: $size;
  animation: gift 1s infinite ease-in-out;
  border-radius: 50%;
  .desc {
    position: absolute;
    transition: all 0.5s ease-in-out;
    top: 30%;
    font-size: $font-size;
    font-weight: bold;
    font-style: italic;
    width: $size;
    overflow: hidden;
  }
  &:hover {
    animation-play-state: paused;
  }
  &:hover .desc {
    transform: translateX(-100%);
  }
}

@keyframes gift {
  0% {
    transform: translateY(0%);
  }
  50% {
    transform: translateY(-25%);
  }
  100% {
    transform: translateY(0);
  }
}


@media (max-width: 1024px) {
  $size: 50px;
  $font-size: 0px;
  #promo-btn {
    @include promo-btn($size, $font-size)
  }
}

@media (min-width: 1025px) {
  $size: 100px;
  $font-size: 18px;
  #promo-btn {
    @include promo-btn($size, $font-size)
  }
}
</style>
