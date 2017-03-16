const dayClickHandler = function (day) {
  this.$router.push({name: 'day', params: {dayNumber: day.maxLunarDay.number, day: Object.assign({}, day)}})
}

export default dayClickHandler
