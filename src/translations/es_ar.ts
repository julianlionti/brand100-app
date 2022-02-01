import { Translation } from '.'
import Config from '../utils/Config'

export const esAr: Translation = {
  welcome:
    Config.APP_NAME === 'BRAND'
      ? 'Bienvenidos #Brand100\nGrandes decisores en la compra de espacios publicitarios.\nPara empezar, seleccione el evento del que participa. Si lo desea podrá cambiarlo luego.'
      : `Bienvenidos al evento ${'Retial 100'}. Para empezar, seleccione el evento del que participa. Si lo desea podrá cambiarlo luego.`,
  'home.ads_see_more': 'Ver más',
  'home.has_to_update': 'Es necesario descargar la nueva información del evento',
  'home.has_to_update_title': 'Información importante',
  'home.has_to_update_button': 'Actualizar',
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
  'catalogue.news.no_data': 'No hay novedades para mostrar',
  'onetoone.favorite_agenda': 'Fav. Agenda',
  'onetoone.favorite_catalogue': 'Fav. Catálogo',
  'onetoone.online_access': 'Agenda Acceso Online',
  'onetoone.delete_all': 'Borrar favoritos',
  'onetoone.create_event': 'Crear evento',
  'onetoone.choose_day': 'Elegí un dia',
  'onetoone.create': 'Crear',
  'onetoone.create_calendar_event': 'Vincular evento con calendario',
  'onetoone.delete_description':
    'Se van a borrar tus eventos favoritos y creados recientemente. Desea continuar?',
  'onetoone.delete_title': '¡Confirmación!',
  'onetoone.event_title': 'Titulo del evento',
  'onetoone.event_title_placeholder': 'Reunion con ...',
  'onetoone.event_description': 'Descripción',
  'onetoone.event_description_placehoder': 'Hablar de...',
  'onetoone.event_end': 'Fin',
  'onetoone.event_end_placeholder': '20:00',
  'onetoone.event_start': 'inicio',
  'onetoone.event_start_placeholder': '19:30',
  'onetoone.new_event': 'Nuevo evento',
  'onetoone.delete': 'Borrar',
  'onetoone.empty_agenda': 'Todavia no tenés ningun evento favorito. ¿Qué estás esperando?',
  'onetoone.empty_catalogue': 'Todavia no tenés ningun catálogo favorito. Agregalo!',
  'onetoone.save': 'Grabar evento',
  'onetoone.reset': 'Limpiar formulario',
  'onetoone.minutes': 'Minuto',
  'onetoone.hours': 'Hora'
}
