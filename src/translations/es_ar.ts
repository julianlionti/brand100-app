import { Translation } from '.'
import Config from '../utils/Config'

export const esAr: Translation = {
  welcome:
    Config.APP_NAME === 'BRAND'
      ? 'Bienvenidos #Brand100\nGrandes decisores en la compra de espacios publicitarios.\nPara empezar, seleccione el evento del que participa. Si lo desea podrá cambiarlo luego.'
      : `Bienvenidos al evento ${'Retial 100'}. Para empezar, seleccione el evento del que participa. Si lo desea podrá cambiarlo luego.`,
  'menu.catalogue': 'Catálogo',
  'menu.featured': 'Destacados',
  'menu.maps': 'Planos',
  'menu.general_agenda': 'Agenda general',
  'menu.online_agenda': 'Acceso agenda online',
  'menu.notifications': 'Notificaciones',
  'menu.welcome': 'Bienvenida',
  'menu.home': 'Inicio',
  'menu.organize': 'Organiza',
  'menu.one_to_one_agenda': 'Agenda one to one',
  'header.change_event': 'Cambiar de evento',
  'header.login': 'Iniciar sesión',
  'header.more_options': 'Más opciones',
  'download.title': '',
  'download.information': 'Estamos descargando los archivos necesarios del evento seleccionado',
  'download.unzipping_error': 'No se pudo descomprimir el archivo',
  'download.unzipping': 'Descomprimiendo la información del evento, Ya casi está!',
  'event.home.welcome': 'Bienvenidos a la APP Oficial de',
  'agenda.day': 'Día',
  'agenda.detail': 'Ver detalle',
  'tabs.no_data': 'No hay información para mostrar',
  'catalogue.information': 'Información',
  'catalogue.news': 'Noticias',
  'catalogue.paricipants': 'Asistentes',
  'catalogue.news.no_data': 'No hay novedades para mostrar'
}
