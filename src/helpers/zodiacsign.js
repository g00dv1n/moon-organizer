// @flow

const normalize = (v) => {
  v = v - Math.floor(v)
  if (v < 0) {
    v = v + 1
  }
  return v
}

const getMoonInformations = (date: Date): string => {
  let zodiac
  let yy, mm, k1, k2, k3, jd
  let ip, dp, rp

  let year = date.getFullYear()
  let month = date.getMonth() + 1
  let day = date.getDate()

  yy = year - Math.floor((12 - month) / 10)
  mm = month + 9
  if (mm >= 12) {
    mm = mm - 12
  }

  k1 = Math.floor(365.25 * (yy + 4712))
  k2 = Math.floor(30.6 * mm + 0.5)
  k3 = Math.floor(Math.floor((yy / 100) + 49) * 0.75) - 38

  jd = k1 + k2 + day + 59
  if (jd > 2299160) {
    jd = jd - k3
  }

  // calculate moon's age in days
  ip = normalize((jd - 2451550.1) / 29.530588853)

  ip = ip * 2 * Math.PI

  // Calculate moon's distance
  dp = 2 * Math.PI * normalize((jd - 2451562.2) / 27.55454988)

  // Calculate moon's ecliptic longitude
  rp = normalize((jd - 2451555.8) / 27.321582241)
  let longitude = 360 * rp + 6.3 * Math.sin(dp) + 1.3 * Math.sin(2 * ip - dp) + 0.7 * Math.sin(2 * ip)

  /* if (longitude < 33.18) {
    zodiac = 'aries'
  } else if (longitude < 51.16) {
    zodiac = 'taurus'
  } else if (longitude < 93.44) {
    zodiac = 'gemini'
  } else if (longitude < 119.48) {
    zodiac = 'cancer'
  } else if (longitude < 135.30) {
    zodiac = 'leo'
  } else if (longitude < 173.34) {
    zodiac = 'virgo'
  } else if (longitude < 224.17) {
    zodiac = 'libra'
  } else if (longitude < 242.57) {
    zodiac = 'scorpio'
  } else if (longitude < 271.26) {
    zodiac = 'sagittarius'
  } else if (longitude < 302.49) {
    zodiac = 'capricorn'
  } else if (longitude < 311.72) {
    zodiac = 'aquarius'
  } else if (longitude < 348.58) {
    zodiac = 'pisces'
  } else {
    zodiac = 'aries'
  } */

  if (longitude < 30) {
    zodiac = 'aries'
  } else if (longitude < 60) {
    zodiac = 'taurus'
  } else if (longitude < 90) {
    zodiac = 'gemini'
  } else if (longitude < 120) {
    zodiac = 'cancer'
  } else if (longitude < 150) {
    zodiac = 'leo'
  } else if (longitude < 180) {
    zodiac = 'virgo'
  } else if (longitude < 210) {
    zodiac = 'libra'
  } else if (longitude < 240) {
    zodiac = 'scorpio'
  } else if (longitude < 270) {
    zodiac = 'sagittarius'
  } else if (longitude < 300) {
    zodiac = 'capricorn'
  } else if (longitude < 330) {
    zodiac = 'aquarius'
  } else if (longitude < 360) {
    zodiac = 'pisces'
  } else {
    zodiac = 'aries'
  }

  return zodiac
}

export default getMoonInformations
