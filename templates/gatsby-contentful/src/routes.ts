// GET FROM CONTENTFUL
const ROUTES = {
  HOME: '/',
  LOGIN: '/auth/sign-in',
  REGISTRATION: '/auth/sign-up',
  FORGOT_PASSWORD: '/auth/forgot-password',
  ACCOUNT: '/account',
}
export default ROUTES
export const PUBLIC_ROUTES = [
  ROUTES.HOME,
  ROUTES.LOGIN,
  ROUTES.REGISTRATION,
  ROUTES.FORGOT_PASSWORD
]
