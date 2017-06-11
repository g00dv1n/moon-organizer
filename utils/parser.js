const fs = require('fs')

const en = fs.readFileSync('./todolist-eng.txt', 'utf8')
const ru = fs.readFileSync('./todolist.txt', 'utf8')

const normalizeName = (name) => name.replace(/\s/g, '').toLowerCase()

const getRowData = (row) => {
  const parseArr = row.split(/([a-zа-я\)]\s*)(\d)/i)
  let text = parseArr[0] + parseArr[1]
  text = text.replace(/\s+$/g, '')
  const daysStr = parseArr[2] + parseArr[3]
  // console.log(daysStr)
  const days = daysStr.split(/[,\s]+/i).map(ds => parseInt(ds))
  return {
    text,
    days
  }
}

const fn = (text, lang) => {
  const categories = text.split('\n\n')
  const res = []
  let i = 1
  categories.forEach(c => {
    const data = c.split('\n')
    const name = normalizeName(data[0])
    data.shift()
    data.forEach((d) => {
      const {text, days} = getRowData(d)
      const item = {
        name: '$' + i,
        category: name,
        days: days,
        text: {}
      }
      item.text[lang] = text
      res.push(item)
      i = i + 1
    })
  })
  // console.log(res)
  return res
}

const enJson = fn(en, 'en')
const ruJson = fn(ru, 'ru')

const fullJson = enJson.map((e, i) => {
  e.text.ru = ruJson[i].text.ru
  return e
})

fullJson.forEach(e => {
  let t = `{
    name: '${e.name}',
    category: '${e.category}',
    days: [${e.days.join(', ')}],
    text: {
      ru: '${e.text.ru}',
      en: '${e.text.en}'
    }
  },`
  console.log(t)
})

//console.log(JSON.stringify(fullJson, null, 4))
