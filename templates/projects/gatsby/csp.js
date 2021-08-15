const devCSP = `
https://${process.env.REACT_APP_PROJECT_ID}.web.app
`

const testCSP = `
https://${process.env.REACT_APP_PROJECT_ID}.web.app
`

const prodCSP = `
https://${process.env.REACT_APP_PROJECT_ID}.web.app
`

module.exports = (env = 'development') => {
  if (env === 'test') return testCSP
  if (env === 'production') return prodCSP
  return devCSP
}
