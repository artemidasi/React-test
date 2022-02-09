export const POINT_REDDIT = {
  best: '/best',
  authorize: '/authorize'
}

export const OAUTH_URL_REDDIT = 'https://oauth.reddit.com'

export const MAIN_URL_REDDIT = 'https://www.reddit.com/api/v1'

export const MAIN_DEV_URL_REDDIT = 'https://www.reddit.com/dev/api'

export const AUTH_URL_REDDIT = 'https://oauth.reddit.com/api/v1/me'

export const fetchURL = {
  best: `${OAUTH_URL_REDDIT}${POINT_REDDIT.best}`,
  authorize: `${MAIN_URL_REDDIT}${POINT_REDDIT.authorize}`
}
