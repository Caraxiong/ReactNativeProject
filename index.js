import { AppRegistry } from 'react-native';
import App from './App';
//注册入口组件
//负责注册运行ReactNative应用程序的JavaScript入口
//registerComponent 注册应用程序的入口组件，告知ReactNative哪一个组件被注册为应用的根容器
AppRegistry.registerComponent('reactNative', () => App);
