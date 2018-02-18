<template>
    <div class="specific-promo-page">
        <div class="specific-promo-page__title">
            {{title}}
        </div>
        <div class="specific-promo-page__screen">
          <img :src="screenUrl" alt="">
        </div>
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
  name: 'promo-biorhythms',
  components: {
    PromoActivateBtn
  },
  data () {
    return {
      promoText: {
        ru:
          'Функция "Мои биоритмы" доступна только в Персональном Лунном Календаре',
        en:
          '"My biorhythms" option is available only in the Personal Lunar Calendar'
      },
      promoTitle: {
        ru:
          'Отслеживайте свое состояние в режиме реального времени - графики Ваших физического, эмоционального и интеллектуального ритмов всегда под рукой!',
        en:
          'Track your condition real-time with the graphs of your physical, emotional and intellectual rhythms!'
      }
    }
  },
  computed: {
    ...mapGetters(['constants']),
    text () {
      return this.promoText[this.$store.state.locale]
    },
    title () {
      return this.promoTitle[this.$store.state.locale]
    },
    screenUrl () {
      return require(`assets/promo-screens/biorhythms-1-${this.$store.state.locale}.jpg`)
    }
  },
  methods: {
    goToPromoAbout () {
      this.$router.push({ name: 'promo-page' })
    }
  }
}
</script>

<style lang="scss" scoped>
$padding: 20px;
$top-margin: 25px;

.specific-promo-page {
  margin-top: $top-margin;
  width: 100%;
  height: auto;
  padding: $padding;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 20px;
  line-height: 1.5;
  &__controls {
    margin: 20px;
  }
  &__screen {
    width: 500px;
    margin: 25px;
    img {
      width: 100%;
    }
  }
}
</style>
