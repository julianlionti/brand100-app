import { Translation } from '.'
import Config from '../utils/Config'

export const esAr: Translation = {
  welcome:
    Config.APP_NAME === 'BRAND'
      ? 'Bienvenidos #Brand100\nGrandes decisores en la compra de espacios publicitarios.\nPara empezar, seleccione el evento del que participa. Si lo desea podrá cambiarlo luego.'
      : `Bienvenidos al evento ${'Retial 100'}. Para empezar, seleccione el evento del que participa. Si lo desea podrá cambiarlo luego.`,
  'menu.about_us': 'Quienes somos',
  'menu.catalogue': 'Catálogo',
  'menu.general_agenda': 'Agenda general',
  'menu.home': 'Inicio',
  'menu.map': 'Mapa',
  'menu.one_to_one_agenda': 'Agenda one to one',
  'header.change_event': 'Cambiar de evento',
  'header.login': 'Iniciar sesión',
  'header.more_options': 'Más opciones',
  'download.title': '',
  'download.information': 'Estamos descargando los archivos necesarios del evento seleccionado',
  'download.unzipping_error': 'No se pudo descomprimir el archivo',
  'download.unzipping': 'Descomprimiendo la información del evento, Ya casi está!'
}
