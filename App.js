import React ,{ Component }from 'react';
import { StyleSheet, Text, View } from 'react-native';
// import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from "react-navigation";
import { Provider } from "react-redux";
import HomeScreen from './Screens/HomeScreen';
import PeopleScreen from './Screens/PeopleScreen';
import FriendsScreen from './Screens/FriendsScreen';
import store from './Redux/Store/store'

export default class App extends Component{

  render(){
    return (
    <Provider store={store}>
    <AppContainer/>
    </Provider>
    )
  }
}

const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  People: {
    screen: PeopleScreen
  },
  Friends: {
    screen: FriendsScreen
  }
},
  {
    initialRouteName: "Home",
    defaultNavigationOptions:{
      headerTitleAlign: "center",
    }

}
);

const AppContainer = createAppContainer(AppNavigator);