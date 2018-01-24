<template>
  <md-button class="md-raised md-primary" @click.native="goToRegistration">
      {{constants.activate}}
      <i class="strikethrough" v-if="isUSD">19.95 USD</i>
      <i class="price">{{productInfo.amount}} {{productInfo.currency}}</i>
  </md-button>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'promo-calc',
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters(['constants', 'locale', 'productInfo']),
    isUSD () {
      return this.productInfo && this.productInfo.currency === 'USD'
    },
    isBookShowed () {
      return this.locale === 'ru'
    }
  },
  methods: {
    goToRegistration () {
      this.$router.push({name: 'registration'})
    }
  }
}
</script>

<style lang="scss" scoped>
.strikethrough {
    position: relative;
    &:before {
      border-bottom: 1px solid red;
      position: absolute;
      content: "";
      transform: rotate(-7deg);
      top: -50%;
      left: 0;
      width: 100%;
      height: 100%;
    }
}

.price {
    font-weight: bold;
    font-style: normal;
}

</style>
