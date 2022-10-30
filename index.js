/**
 * @format
 */

import {extendTheme, NativeBaseProvider} from 'native-base';
import React, {useEffect, useState} from 'react';
import {Appearance, AppRegistry} from 'react-native';
import {Provider} from 'react-redux';
import App from './App';
import {name as appName} from './app.json';
import {store} from './src/redux/store';

function Main() {
  const [colorModeManager, setColorModeManager] = useState({
    get: async () => {
      try {
        Appearance.addChangeListener(pref => {
          return pref.colorScheme;
        });
      } catch (e) {
        return 'light';
      }
    },
    set: () => {},
  });

  const theme = extendTheme({
    colors: {
      primary: {
        50: '#E1F4ED',
        100: '#C5EADC',
        200: '#ABDFCC',
        300: '#92D4BC',
        400: '#7BC9AD',
        500: '#65BF9E',
        600: '#52B490',
        700: '#40A983',
        800: '#2F9F76',
        900: '#21936A',
      },
    },
    fontConfig: {
      Roboto: {
        100: {
          normal: 'Roboto-Light',
          italic: 'Roboto-LightItalic',
        },
        200: {
          normal: 'Roboto-Light',
          italic: 'Roboto-LightItalic',
        },
        300: {
          normal: 'Roboto-Light',
          italic: 'Roboto-LightItalic',
        },
        400: {
          normal: 'Roboto-Regular',
          italic: 'Roboto-Italic',
        },
        500: {
          normal: 'Roboto-Medium',
          italic: 'Roboto-MediumItalic',
        },
        600: {
          normal: 'Roboto-Medium',
          italic: 'Roboto-MediumItalic',
        },
        700: {
          normal: 'Roboto-Bold',
          italic: 'Roboto-BoldItalic',
        },
        800: {
          normal: 'Roboto-Bold',
          italic: 'Roboto-BoldItalic',
        },
        900: {
          normal: 'Roboto-Bold',
          italic: 'Roboto-BoldItalic',
        },
      },
    },
    fonts: {
      heading: 'Roboto',
      body: 'Roboto',
      mono: 'Roboto',
    },
  });

  useEffect(() => {
    Appearance.addChangeListener(pref => {
      setColorModeManager({
        get: async () => {
          try {
            let val = pref.colorScheme;
            return val === 'dark' ? 'dark' : 'light';
          } catch (e) {
            return 'light';
          }
        },
        set: () => {},
      });
    });
  }, []);

  return (
    <Provider store={store}>
      <NativeBaseProvider theme={theme} colorModeManager={colorModeManager}>
        <App />
      </NativeBaseProvider>
    </Provider>
  );
}

AppRegistry.registerComponent(appName, () => Main);
