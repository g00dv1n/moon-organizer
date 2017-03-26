// @flow

export const calculateCalendarHeight = (id: string) => {
  let container = document.getElementById(id)
  if (!container) {
    throw new Error(`Cannot find Calendar container by id=${id}`)
  }
  const rect = container.getBoundingClientRect()
  let windowHeight = document.documentElement && document.documentElement.clientHeight
  if (!windowHeight) {
    throw new Error(`Cannot get clientHeight from document.documentElement`)
  }
  const containerHeigt = windowHeight - rect.top
  container.style.height = containerHeigt + 'px'
}
