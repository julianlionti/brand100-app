import i18n, { StringMap, TOptions } from 'i18next'
import { useCallback } from 'react'
import { initReactI18next, useTranslation } from 'react-i18next'
import { enUs } from './en_us'
import { esAr } from './es_ar'
// import { esAr } from './es_ar'

export type Translations =
  | 'welcome'
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
