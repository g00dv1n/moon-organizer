// @flow

const onDefault = function (self: Object): Function {
  return function (day: Day, params?: any): void {
    self.$store.commit('SET_LAST_CLICKED_DAY', day)
    self.$router.push({name: 'lunar-day', params: {dayNumber: day.showedLunarDay.number, ...params}})
  }
}

const onCategory = function (self: Object): Function {
  // get modal from current component or from main
  const modal = self.$refs['modal'] || document.getElementById('modal') ||
    self.$refs.main && self.$refs.main.modal
  return function (day: Day): void {
    self.$store.commit('SET_LAST_CLICKED_DAY', day)
    if (modal) {
      modal.open()
    } else {
      throw new Error('Cannot get modal !>?')
    }
  }
}

export { onDefault, onCategory }
