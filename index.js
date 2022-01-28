/**
 * @format
 */
import 'react-native-gesture-handler'

import { AppRegistry, LogBox } from 'react-native'
import App from './src/App'
import { name as appName } from './app.json'
import { initTranslations } from './src/translations'

initTranslations()

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you're using an old API with gesture components, check out new Gestures system",
  'Require cycle:'
])

AppRegistry.registerComponent(appName, () => App)
