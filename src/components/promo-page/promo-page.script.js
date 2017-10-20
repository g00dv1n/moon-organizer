import { mapGetters } from 'vuex'
import { MoonCard } from '../moon-card'

const pluses = [
  {
    title: {
      ru: 'Информация по всем категориям',
      en: 'Useful tips on all categories'
    },
    text: {
      ru: 'Получайте полезные советы по всем интересующим Вас категориям без ограничений!',
      en: 'Get information on all categories you are interested in without any restrictions!'
    },
    url: require('../../assets/promo-paid-icons/calendar.png')
  },
  {
    title: {
      ru: 'Список Дел',
      en: 'To-do list'
    },
    text: {
      ru: 'Составьте список Ваших дел и Лунный Календарь сам предложит Вам лучшие даты для их выполнения и, если пожелаете, напомнит Вам о них!',
      en: 'Make a list of your to-dos and the Lunar Calendar will independently offer you the best dates for their fulfillment! And, if you wish, remind you of your plans in advance!'
    },
    url: require('../../assets/promo-paid-icons/clipboard.png')
  },
  {
    title: {
      ru: 'Мои Биоритмы',
      en: 'My Biorhythms'
    },
    text: {
      ru: 'Отслеживайте свое состояние в режиме реального времени - графики Ваших физического, эмоционального и интеллектуального ритмов всегда под рукой!',
      en: 'Track your condition real-time with the graphs of your physical, emotional and intellectual rhythms!'
    },
    url: require('../../assets/promo-paid-icons/line-chart.png')
  },
  {
    title: {
      ru: 'Калькулятор Лунных Дней',
      en: 'Lunar Days Calculator'
    },
    text: {
      ru: 'Какой лунный день был в день свадьбы Ваших родителей? На какой лунный день выпадет рождение Вашего малыша? С Калькулятором лунных дней Вы не ограничены во времени!',
      en: 'What lunar day was at the day of your parents\' wedding? On which lunar day will the birth of your baby occur? With the Lunar Days Calculator, you are not limited in time!'
    },
    url: require('../../assets/promo-paid-icons/calculator.png')
  },
  {
    title: {
      ru: 'Посевной Календарь по Знакам Зодиака',
      en: 'Sowing Calendar based on the Zodiac Signs'
    },
    text: {
      ru: 'Какие растения высаживать в зависимости от Знака Зодиака, в котором находится Луна? Используйте списки овощных, пряно-зеленых, плодово-ягодных, полевых, цветущих и комнатных растений для посадки на каждый день!',
      en: 'Which plants to plant, depending on the Zodiac Sign in which the Moon is located? Use the lists of vegetables, spices & greenery, fruit & berry, field crops, flowering and houseplants which are good for planting for every day!'
    },
    url: require('../../assets/promo-paid-icons/sprout.png')
  },
  {
    title: {
      ru: 'Календарь Зачатия по Знакам Зодиака',
      en: 'Conception Calendar based on the Zodiac Signs'
    },
    text: {
      ru: 'Запланируйте пол ребенка заранее! Лунный календарь зачатия всегда подскажет, в "мужском" или "женском" Знаке Зодиака находится Луна',
      en: 'Plan the sex of the baby in advance! Conception lunar calendar always tells you, in which Zodiac Sign the Moon is now - the "male" or "female"'
    },
    url: require('../../assets/promo-paid-icons/newborn.png')
  },
  {
    title: {
      ru: 'Лунный День Рождения',
      en: 'My Lunar Birthday'
    },
    text: {
      ru: 'Узнайте, как день лунного цикла, в который Вы родились, повлиял на Вас и на Вашу судьбу. Измените свою жизнь к лучшему, зная свои сильные и слабые стороны!',
      en: 'Find out how the day of the lunar cycle into which you were born influenced you and your destiny. Make your life happier by the knowledge of your strengths and weaknesses!'
    },
    url: require('../../assets/promo-paid-icons/birthday-cake.png')
  },
  {
    title: {
      ru: 'Лунный Знак Зодиака',
      en: 'My Lunar Zodiac Sign'
    },
    text: {
      ru: 'Лунный Знак Зодиака не менее влиятелен, чем "Солнечный". Каким будет Ваш лунный гороскоп?',
      en: 'Lunar Zodiac Sign is no less influential than "Solar" one. What will be your lunar horoscope?'
    },
    url: require('../../assets/promo-paid-icons/solar-system.png')
  }
]

export default {
  name: 'promo-page',
  data () {
    return {
      pluses
    }
  },
  components: {
    MoonCard
  },
  computed: {
    ...mapGetters(['constants', 'locale', 'productInfo', 'geo']),
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
  },
  created () {
    window.yaCounter.reachGoal('on_promo')
  }
}
