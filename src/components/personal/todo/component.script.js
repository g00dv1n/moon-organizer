import { MoonCard } from '../../moon-card'
import todoTasks from '../../../todo-tasks'
import { mapGetters } from 'vuex'

export default {
  name: 'todo',
  data () {
    return {
      activeNames: ['1']
    }
  },
  components: {
    MoonCard
  },
  methods: {},
  computed: {
    ...mapGetters(['constants', 'locale']),
    categories () {
      return Object.keys(todoTasks)
    },
    tasks () {
      return todoTasks
    }
  },
  created () {
  }
}
