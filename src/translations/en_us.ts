import { Translation } from '.'
import Config from '../utils/Config'

export const enUs: any = {
  welcome: `Bienvenidos al evento ${Config.APP_NAME === 'BRAND' ? ' #Brand 100' : Config.APP_NAME}`
}
