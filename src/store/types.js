/*
Global store for state attribute, and method names
*/

/*
Mutations
 */

// notifications
export const MUTATE_SNACKBAR_MESSAGE = 'notifications/mutations/setSnackbarMessage'
export const MUTATE_SNACKBAR_MODEL = 'notifications/mutations/setSnackbarModel'

// theme settings
export const MUTATE_THEME = 'themeSettings/mutations/setTheme'
export const MUTATE_PRIMARY_DRAWER = 'themeSettings/mutations/primaryDrawer'
export const MUTATE_FOOTER = 'themeSettings/mutations/footer'

// index
export const MUTATE_LOADING = 'index/mutations/setLoading'
export const MUTATE_CARDS = 'index/mutations/setCards'
export const MUTATE_ERROR = 'index/mutations/setError'

/*
Actions
 */

// notifications
export const TOGGLE_SNACKBAR = 'notifications/actions/toggleSnackbar'
export const RESET_SNACKBAR_MESSAGE = 'notifications/actions/resetSnackbarMessage'
export const UPDATE_SNACKBAR_MESSAGE = 'notifications/actions/setSnackbarMessage'

// theme settings
export const SAVE_SETTINGS = 'themeSettings/actions/saveSettings'
export const GET_SETTINGS = 'themeSettings/actions/retrieveSettings'
export const RESET_SETTINGS = 'themeSettings/actions/resetSettings'

// index
export const GET_ROUTE_DATA = 'index/actions/getRouteData'
export const UPDATE_LOADING = 'index/actions/setLoading'

/*
Getters / State
*/

// notifications
export const SNACKBAR = 'notificaions/snackbar'
export const DEFAULT_MESSAGE = 'notifications/defaultMessage'

// theme settings
export const DRAWER_LINKS = 'themeSettings/drawerlinks'
export const DRAWERS = 'themeSettings/drawers'
export const STORED_SETTINGS = 'themeSettings/settings'
export const THEME = 'themeSettings/theme'
export const PRIMARY_DRAWER = 'themeSettings/primaryDrawer'
export const FOOTER = 'themeSettings/footer'

// index
export const LOADING = 'index/loading'
export const ERROR = 'index/error'
export const CARDS = 'index/cards'

