import 'react-native-gesture-handler';
import {AppRegistry} from 'react-native';

import AppNavigator from './App/index';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => AppNavigator);
