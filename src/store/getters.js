/**
 * Created by g00dv1n on 01.03.17.
 */

const getters = {
  calendarTypes (state) {
    return state.calendarTypes.map((type) => {
      let text = type.text[state.locale]
      let name = type.name
      return {name, text}
    })
  }
}

export default getters
