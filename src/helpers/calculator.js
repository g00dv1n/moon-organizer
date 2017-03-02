export const calculateCalendarHeight = (id) => {
  let container = document.getElementById(id)
  let rect = container.getBoundingClientRect()
  let windowHeight = document.documentElement.clientHeight
  let containerHeigt = windowHeight - rect.top
  container.style.height = containerHeigt + 'px'
}
