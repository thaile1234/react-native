import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import HomeScreen from '../screens/HomeScreens';
import SCREEN from './Routekey';
import UserScreen from '../screens/UserScreen';
import MyNetworkScreen from '../screens/MyNetworkScreen';
import MessagesScreens from '../screens/MessagesScreen';
import { Image, Text } from 'react-native';
import { IMAGES } from '../theme/images';
import styles from './style'

const Tab = createBottomTabNavigator();

const BottomTab = () => {
  return (
    <Tab.Navigator  screenOptions={{headerShown: false}}>
      <Tab.Screen component={HomeScreen} name={SCREEN.HOME_SCREEN} options={{
          tabBarLabel:({focused}) => <Text style={{color:focused? '#FF0000' :'#000000'}}>{'Home'}</Text>,
          tabBarIcon: ({focused}) =>(
            focused ? (
              <Image source={IMAGES.icHomeFocused} style={styles.image}/>
            ):(
              <Image source={IMAGES.icHomeUnFocused} style={styles.image}/>
            )
          ),
        //  tabBarActiveTintColor:'#FF0000',
          // tabBarInactiveTintColor:'#000000',
        }}
        />
      <Tab.Screen component={UserScreen} name={SCREEN.USER_SCREEN}  options={{
          tabBarLabel:({focused}) => <Text style={{color:focused? '#FF0000' :'#000000'}}>{'User'}</Text>,
          tabBarIcon: ({focused}) =>(
            focused ? (
              <Image source={IMAGES.icUserRed} style={styles.image}/>
            ):(
              <Image source={IMAGES.icUser} style={styles.image}/>
            )
          ),
        //  tabBarActiveTintColor:'#FF0000',
          // tabBarInactiveTintColor:'#000000',
        }}/>
      <Tab.Screen component={MessagesScreens} name={SCREEN.MESSAGES_SCREEN} options={{
          tabBarLabel:({focused}) => <Text style={{color:focused? '#FF0000' :'#000000'}}>{'Messages'}</Text>,
          tabBarIcon: ({focused}) =>(
            focused ? (
              <Image source={IMAGES.icMessagesRed} style={styles.image}/>
            ):(
              <Image source={IMAGES.icMessages} style={styles.image}/>
            )
          ),
        //  tabBarActiveTintColor:'#FF0000',
          // tabBarInactiveTintColor:'#000000',
        }}/>
      <Tab.Screen component={MyNetworkScreen} name={SCREEN.MY_NETWORK_SCREEN} options={{
          tabBarLabel:({focused}) => <Text style={{color:focused? '#FF0000' :'#000000'}}>{'My Work'}</Text>,
          tabBarIcon: ({focused}) =>(
            focused ? (
              <Image source={IMAGES.icMyWorkRed} style={styles.image}/>
            ):(
              <Image source={IMAGES.icMyWork} style={styles.image}/>
            )
          ),
        //  tabBarActiveTintColor:'#FF0000',
          // tabBarInactiveTintColor:'#000000',
        }}/>
    </Tab.Navigator>
  );
};
export default BottomTab;
