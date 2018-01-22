<template>
    <div class="specific-promo-page">
        <div class="specific-promo-page__text">
            {{text}}
        </div>
        <div class="specific-promo-page__controls">
             <md-button class="md-raised" @click.native="goToPromoAbout">
                 {{constants.learnMore}}
             </md-button>
            <promo-activate-btn></promo-activate-btn>
        </div>
    </div>
</template>

<script>
import { PromoActivateBtn } from '../../promo-activate-btn'
import { mapGetters } from 'vuex'

export default {
  name: 'promo-todo',
  components: {
    PromoActivateBtn
  },
  data () {
    return {
      promoText: {
        ru:
          'Функция "Мой список дел" доступна только в Персональном Лунном Календаре',
        en:
          '"My to-do list" option is available only in the Personal Lunar Calendar'
      }
    }
  },
  computed: {
    ...mapGetters(['constants']),
    text () {
      return this.promoText[this.$store.state.locale]
    }
  },
  methods: {
    goToPromoAbout () {
      this.$router.push({name: 'promo-page'})
    }
  }
}
</script>

<style lang="scss" scoped>
$padding: 20px;
$top-margin: 15%;

.specific-promo-page {
  margin-top: $top-margin;
  width: 100%;
  height: auto;
  padding: $padding;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  &__controls {
      margin: 20px;
  }
}
</style>
