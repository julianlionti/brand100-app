import { useMemo } from 'react'
import { useT } from '../../translations'

export type IMenu = { title: string; onPress: () => void }

const useDrawerContent = () => {
  const t = useT()
  const menu = useMemo<IMenu[]>(
    () => [
      {
        title: t('menu.home') as string,
        onPress: () => {
          console.log('Home')
        }
      },
      {
        title: t('menu.about_us') as string,
        onPress: () => {
          console.log('About')
        }
      }
    ],
    [t]
  )
  return { menu }
}

export default useDrawerContent
