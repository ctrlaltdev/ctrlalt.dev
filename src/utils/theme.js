const get = () => (window.localStorage.getItem('theme') || 'dark')

const set = (theme = 'dark') => {
  window.localStorage.setItem('theme', theme)
  return true
}

const handler = (theme = 'dark') => {
  document.body.setAttribute('data-theme', theme)
  set(theme)
}

module.exports = {
  get,
  set,
  handler
}
