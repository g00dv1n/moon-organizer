// @flow
import { MoonCard } from '../../moon-card'
import { mapGetters, mapActions } from 'vuex'
import { todoTasks, saveTasks } from '../../../todo-tasks/'

export default {
  name: 'TodoList',
  data () {
    return {
      activeNames: ['1'],
      tasks: todoTasks(),
      persent: 0,
      isCalculation: false,
      status: ''
    }
  },
  components: {
    MoonCard
  },
  methods: {
    ...mapActions(['updateUser']),
    runProgressbar () {
      const incPer = () => {
        if (this.persent >= 100) {
          this.status = 'success'
          setTimeout(() => {
            this.isCalculation = false
            this.persent = 0
            this.status = ''
            this.$router.replace({name: 'todo-my', params: {canSave: true}})
            this.$destroy()
          }, 1000)
        } else {
          this.persent += 10
          setTimeout(incPer, 200)
        }
      }
      this.isCalculation = true
      incPer()
    },
    saveTasks () {
      if (this.$redirectToPromo('todo')) {
        return
      }

      let selected: any[] = this.getSelected()
      saveTasks(selected)
        .then(() => this.runProgressbar())
    },
    getSelected () {
      let res: any[] = []
      this.categories.forEach(c => {
        res = res.concat(this.tasks[c].filter(t => !!t.selected))
      })
      return res
    }
  },
  computed: {
    ...mapGetters(['constants', 'locale', 'user']),
    categories () {
      return Object.keys(this.tasks)
    }
  },
  created () {}
}
