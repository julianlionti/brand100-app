import React from 'react'
import { Provider } from 'react-redux'
import Main from './routes/Main'
import { persistor, store } from './store/store'
import darkTheme from './themes/darkTheme'
import { injectStore } from './utils/makeRequest'
import { NativeBaseProvider } from 'native-base'
import { PersistGate } from 'redux-persist/integration/react'
import { ActivityIndicator } from 'react-native'
import PageContainer from './components/PageContainer'

injectStore(store)

const App = () => {
  return (
    <NativeBaseProvider theme={darkTheme}>
      <Provider store={store}>
        <PersistGate
          loading={
            <PageContainer>
              <ActivityIndicator />
            </PageContainer>
          }
          persistor={persistor}
        >
          <Main />
        </PersistGate>
      </Provider>
    </NativeBaseProvider>
  )
}

export default App
