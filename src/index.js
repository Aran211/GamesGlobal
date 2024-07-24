import { AppRegistry } from 'react-native-web';
import App from './App';

AppRegistry.registerComponent('AdvancedTodoApp', () => App);

if (document.getElementById('root')) {
  AppRegistry.runApplication('AdvancedTodoApp', {
    rootTag: document.getElementById('root')
  });
}