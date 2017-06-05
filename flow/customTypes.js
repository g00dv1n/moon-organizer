// @flow

declare type GeoData = {
  ip: string,
  hostname: string,
  city: string,
  region: string,
  country: string,
  loc: string,
  org: string
}

declare type LunarDay = {
  start: moment$Moment,
  end: moment$Moment,
  number: number,
  duration?: number
}

declare type DayStyle = {
  top: string,
  left: string
}

declare type Day = {
  // Day number. Start from 1..
  day: number,
  // Day Date. Standart JS Date object
  date: Date,
  // is today flag
  isToday: boolean,
  // All lunar days for specific date
  lunarDays: Array<LunarDay>,
  // Max lunar day for specific date
  maxLunarDay: LunarDay,
  // Moon phase.
  moonPhase: string | null,
  // Path to logo
  moonPhaseLogoPath: string,
  // lunar day fro show
  showedLunarDay: LunarDay,
  // style for draw in calendar component
  style: DayStyle,
  // Moon in zodiac.
  zodiac?: string,
  // Zodiac logo path
  zodiacLogoPath: string,
  // Day content Using Locale
  content?: DayContent,
  // exactly lunar day for Today
  currentLunarDay?: LunarDay
}

declare type Month = {
  days: Array<Day>,
  year: number,
  monthName: string,
  weekDays: Array<string>
}

// lunar day category info
declare type Category = {
  plus: Array<string>,
  minus: Array<string>,
  name: string,
  order: number,
  path: string
}

declare type DayMainInfo = {
  name: string,
  text: string
}

declare type DayContent = {
  categories: Array<Category>,
  main: DayMainInfo
}

// user
declare type User = {
  id: number,
  name: string,
  surname: string
  birthday: string,
  avatarUrl: string,
  categories: Array<string>
  password: string
}
