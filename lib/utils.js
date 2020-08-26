const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
]

export const formatTime = (time) => {
  const d = new Date(time)

  return `${d.getDate()} ${months[d.getMonth()]} ${d.getFullYear()}`
}
