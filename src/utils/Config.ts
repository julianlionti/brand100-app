import { APP_NAME, BASE_URL } from '@env'

export type APPS_TYPE = 'BRAND' | 'RETAIL'
const Config = {
  APP_NAME: APP_NAME as APPS_TYPE,
  BASE_URL: BASE_URL as string
}

export default Config
