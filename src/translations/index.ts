import i18n, { StringMap, TOptions } from 'i18next'
import { useCallback } from 'react'
import { initReactI18next, useTranslation } from 'react-i18next'
import { enUs } from './en_us'
import { esAr } from './es_ar'
// import { esAr } from './es_ar'

export type Translations =
  | 'welcome'
  | 'home.ads_see_more'
  | 'home.has_to_update_title'
  | 'home.has_to_update'
  | 'home.has_to_update_button'
  | 'menu.home'
  | 'menu.welcome'
  | 'menu.maps'
  | 'menu.general_agenda'
  | 'menu.online_agenda'
  | 'menu.one_to_one_agenda'
  | 'menu.featured'
  | 'menu.catalogue'
  | 'menu.notifications'
  | 'menu.organize'
  | 'header.more_options'
  | 'header.change_event'
  | 'header.login'
  | 'download.title'
  | 'download.information'
  | 'download.unzipping'
  | 'download.unzipping_error'
  | 'event.home.welcome'
  | 'agenda.day'
  | 'agenda.detail'
  | 'tabs.no_data'
  | 'catalogue.information'
  | 'catalogue.news'
  | 'catalogue.paricipants'
  | 'catalogue.news.no_data'
  | 'onetoone.favorite_agenda'
  | 'onetoone.favorite_catalogue'
  | 'onetoone.online_access'

export type Translation = Record<Translations, string>

export const initTranslations = (): void => {
  i18n.use(initReactI18next).init({
    compatibilityJSON: 'v3',
    resources: {
      en: { translation: enUs },
      es: { translation: esAr }
    },
    fallbackLng: 'es',
    interpolation: { escapeValue: false }
  })
}

type TypedT = (key: Translations) => string | TOptions<StringMap> | undefined
export const useT = (): TypedT => {
  const { t } = useTranslation<Translations>()

  const typedT = useCallback<TypedT>((key) => t(key), [t])
  return typedT
}
