// @flow

export const calculateCalendarHeight = (id: string): number => {
  let container = document.getElementById(id)
  if (!container) {
    console.log(`Cannot find Calendar container by id=${id}`)
    return 0
  }
  const rect = container.getBoundingClientRect()
  let windowHeight = document.documentElement && document.documentElement.clientHeight
  if (!windowHeight) {
    throw new Error(`Cannot get clientHeight from document.documentElement`)
  }
  const containerHeight = windowHeight - rect.top
  container.style.height = containerHeight + 'px'
  return containerHeight
}
