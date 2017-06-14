// @flow
import { MoonCard } from '../../moon-card'
import { mapGetters, mapActions } from 'vuex'
import { todoTasks } from '../../../todo-tasks/'

export default {
  name: 'todo',
  data () {
    return {
      activeNames: ['1'],
      todoTasks: todoTasks
    }
  },
  components: {
    MoonCard
  },
  methods: {
    ...mapActions(['updateUser']),
    saveTasks () {
      let selected: any[] = this.getSelected()
      this.updateUser({ tasks: selected.map(s => s.name) })
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
    ...mapGetters(['constants', 'locale']),
    categories () {
      return Object.keys(this.tasks)
    },
    tasks () {
      return todoTasks()
    }
  },
  created () {}
}
