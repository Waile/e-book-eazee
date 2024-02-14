/**
 * @format
 */

import 'react-native-gesture-handler';
import { Provider } from 'react-redux';
import { AppRegistry } from 'react-native';
import store from './src/components/redux/store';
import App from './App';
import { name as appName } from './app.json';

const ReduxWrapper=()=>(
    <Provider store={store}>
            <App/>
    </Provider>
)

AppRegistry.registerComponent(appName, () => ReduxWrapper);
