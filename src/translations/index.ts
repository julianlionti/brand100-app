import i18n, { StringMap, TOptions } from 'i18next'
import { useCallback } from 'react'
import { initReactI18next, useTranslation } from 'react-i18next'
import { enUs } from './en_us'
import { esAr } from './es_ar'
// import { esAr } from './es_ar'

export type Translations =
  | 'welcome'
  | 'menu.home'
  | 'menu.about_us'
  | 'menu.one_to_one_agenda'
  | 'menu.general_agenda'
  | 'menu.map'
  | 'menu.catalogue'
  | 'header.more_options'
  | 'header.change_event'
  | 'header.login'
  | 'download.title'
  | 'download.information'
  | 'download.unzipping'
  | 'download.unzipping_error'

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
