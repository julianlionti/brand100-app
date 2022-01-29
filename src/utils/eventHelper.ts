import fs from 'react-native-fs'
import { IEvent } from '../models/IEvent'
import {
  IActivityDetail,
  IAgendaActivity,
  IAgendaSponsor,
  IFullEvent,
  IParticipant
} from '../models/IFullEvent'
import { IFullOriginalEvent } from '../models/IFullOriginalEvent'
import Config, { APPS_TYPE } from './Config'

const getTitle = () => {
  switch (Config.APP_NAME) {
    case 'BRAND':
      return 'Brand 100'
    case 'RETAIL':
      return 'Retail 100'
    default:
      return 'NO EVENT IN .ENV'
  }
}

const filterEventBy =
  (app: APPS_TYPE) =>
  (ev: IEvent): boolean => {
    const { name, active } = ev
    let predicate = active || false

    predicate =
      predicate &&
      (app === 'BRAND' ? name.toUpperCase().includes(app) : !name.toUpperCase().includes(app))
    return predicate
  }

const filePrefix = `file://`
const resourcesPath = `${fs.CachesDirectoryPath}/event-data/`
const imagePrefix = `${filePrefix}${resourcesPath}`
const legacyToFinalEvent = (ev: IFullOriginalEvent): IFullEvent => ({
  active: ev.activo,
  adveryisments: ev.publicidades,
  agendaPhtosUrl: ev.urlAgendaFotos,
  catalogue: ev.catalogo.map((ca) => ({
    name: ca.nombre,
    logo: `${imagePrefix}${ca.logo}`,
    information: ca.informacion,
    idCatalogue: ca.idCatalogo,
    news: ca.novedades,
    participants: ca.asistentes.map(
      (pa): IParticipant => ({
        name: pa.nombre,
        gender: pa.genero,
        mail: pa.mail,
        photo: `${imagePrefix}${pa.foto}`,
        position: pa.cargo,
        surname: pa.apellido
      })
    )
  })),
  color: ev.color,
  date: ev.fecha,
  duration: ev.duracion,
  endDate: ev.fechaFin,
  featured: ev.destacados.map((fea) => ({
    id: fea.id,
    image: `${imagePrefix}${fea.imagen}`,
    name: fea.nombre
  })),
  generalAgenda: ev.agendaGeneral.map((ag) => ({
    activities: ag.actividades.map(
      (ac): IAgendaActivity => ({
        beginning: ac.inicio,
        description: ac.descripcion,
        details: ac.detalles.map(
          (de): IActivityDetail => ({
            description: de.descripcion,
            idDetail: de.idDetalle,
            ids: de.ids,
            images: de.imagenes.map((img) => `${imagePrefix}${img}`),
            title: de.titulo
          })
        ),
        end: ac.fin,
        idActivity: ac.idActividad,
        name: ac.nombre,
        order: ac.orden,
        schedule: ac.horario,
        sponsors: ac.auspiciantes.map(
          (sp): IAgendaSponsor => ({
            idSponsor: sp.idAuspiciante,
            image: `${imagePrefix}${sp.imagen}`,
            name: sp.nombre
          })
        )
      })
    ),
    date: ag.fecha,
    day: ag.dia
  })),
  hasSponsor: ev.existeSponsor,
  id: ev.id,
  images: ev.imagenes.map((img) => `${imagePrefix}${img}`),
  information: ev.informacion,
  lang: ev.idioma,
  lastUpdate: ev.ultimaActualizacion,
  lastUpdateFeature: ev.destacadosUltimaActualizacion,
  lastUpdateMaps: ev.planosUltimaActualizacion,
  logo: `${imagePrefix}${ev.logo}`,
  maps: ev.planos.map((ma) => ({
    id: ma.id,
    image: `${imagePrefix}${ma.imagen}`,
    name: ma.nombre
  })),
  menu: {
    address: ev.menu.direccion,
    contact: ev.menu.contacto,
    idMenu: ev.menu.idMenu,
    socialNetworks: ev.menu.redes
  },
  name: ev.nombre,
  oneToOneAgendaUrl: ev.urlAgendaPersonal,
  place: ev.lugar,
  sponsors: `${imagePrefix}${ev.sponsors}`,
  startDate: ev.fechaInicio,
  type: ev.tipo,
  updates: ev.actualizaciones.map((up) => ({
    lastUpdate: up.ultimaActualizacion,
    code: up.codigo
  })),
  welcome: {
    hasImage: ev.bienvenida.existeImagen,
    image: `${imagePrefix}${ev.bienvenida.imagen}`,
    title: ev.bienvenida.titulo,
    welcome: ev.bienvenida.bienvenida
  }
})

const EventHelpers = {
  getTitle,
  filterEventBy,
  legacyToFinalEvent,
  resourcesPath
}

export default EventHelpers
