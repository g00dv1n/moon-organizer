// @flow

const phases = [
  {
    days: [29, 30, 1],
    name: 'new moon'
  },
  {
    days: [2, 3, 4, 5, 6, 7],
    name: 'waxing crescent'
  },
  {
    days: [8],
    name: 'first quarter'
  },
  {
    days: [9, 10, 11, 12, 13, 14],
    name: 'waxing gibbous'
  },
  {
    days: [15],
    name: 'full moon'
  },
  {
    days: [16, 17, 18, 19, 20, 21],
    name: 'waning gibbous'
  },
  {
    days: [22],
    name: 'last quarter'
  },
  {
    days: [23, 24, 25, 26, 27, 28],
    name: 'waning crescent'
  }
]

const moonPhase = (dayNumber: number): string | null => {
  for (let p of phases) {
    if (p.days.indexOf(dayNumber) !== -1) {
      return p.name
    }
  }
  return null
}

export default moonPhase
