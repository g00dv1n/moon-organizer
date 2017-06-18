// @flow
import { MoonCard } from '../../moon-card'
import { mapGetters, mapActions } from 'vuex'
// import store from '../../../store'
import moment from 'moment'

export default {
  name: 'TodoMy',
  components: {
    MoonCard
  },
  data () {
    return {
      tasks: []
    }
  },
  props: ['canSave'],
  computed: {
    ...mapGetters(['constants', 'locale', 'user']),
    tasksFrom () {
      return moment(this.user.tasksFrom)
        .locale(this.locale)
        .format('D MMMM YYYY')
        .toString()
    }
  },
  methods: {
    ...mapActions(['updateUserPartial']),
    createNew () {
      this.$destroy()
      this.$router.replace({ name: 'todo-list' })
    },
    formatTaskDate (date: Date): string {
      return moment(date)
        .locale(this.locale)
        .format('D MMMM, ddd')
        .toString()
    },
    save () {
      const tasksOnCalendar = this.tasks
        .filter(t => t.checked)
        .map(t => {
          const nt = Object.assign({}, t)
          delete nt.checked
          return nt
        })
      return this.updateUserPartial({tasksOnCalendar})
      .then(() => this.$router.push({ name: 'default' }))
    }
  },
  created () {
    const tasks = this
      .$store
      .getters
      .tasks
      .map(t => Object.assign({}, t, {checked: true}))

    if (!tasks || tasks.length === 0) {
      this.$destroy()
      this.$router.replace({ name: 'todo-list' })
    } else {
      this.tasks = [].concat(tasks)
    }
  }
}
