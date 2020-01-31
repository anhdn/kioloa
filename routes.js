const nextRoutes = require('next-routes')
const routes = module.exports = nextRoutes()

const APP_ROUTES = [
  {
    page: 'useCode',
    pattern: '/useCode'
  }, {
    page: 'stores',
    pattern: '/stores'
  }, {
    page: 'terms',
    pattern: '/terms'
  }, {
    page: 'privacy-policy',
    pattern: '/privacy-policy'
  }]

APP_ROUTES.forEach(route => routes.add(route))
