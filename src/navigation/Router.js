import React from 'react';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Icon from 'react-native-vector-icons/FontAwesome';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

//Import your Screen here
import Case from './src/screens/Case';
import Contact from './src/screens/Contact';
import Hospital from './src/screens/Hospital';
import Notification from './src/screens/Notification';
import Testing from './src/screens/Testing';

const CaseNavigator = createStackNavigator(
  {
    CaseNavigator: Case,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerRight: (
          <Icon
            style={{paddingRight: 10}}
            onPress={() => navigation.toggleDrawer()}
            name="search"
            size={30}
          />
        ),
        headerStyle: {
          backgroundColor: 'white',
        },
      };
    },
  },
);

const ContactNavigator = createStackNavigator(
  {
    ContactNavigator: Contact,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerRight: (
          <Icon
            style={{paddingRight: 10}}
            onPress={() => navigation.toggleDrawer()}
            name="search"
            size={30}
          />
        ),
        headerStyle: {
          backgroundColor: 'white',
        },
      };
    },
  },
);

const HospitalNavigator = createStackNavigator(
  {
    HospitalNavigator: Hospital,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerRight: (
          <Icon
            style={{paddingRight: 10}}
            onPress={() => navigation.toggleDrawer()}
            name="search"
            size={30}
          />
        ),
        headerStyle: {
          backgroundColor: 'white',
        },
      };
    },
  },
);

const NotificationNavigator = createStackNavigator(
  {
    NotificationNavigator: Notification,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerRight: (
          <Icon
            style={{paddingRight: 10}}
            onPress={() => navigation.toggleDrawer()}
            name="search"
            size={30}
          />
        ),
        headerStyle: {
          backgroundColor: 'white',
        },
      };
    },
  },
);

const TestingNavigator = createStackNavigator(
  {
    TestingNavigator: Testing,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerRight: (
          <Icon
            style={{paddingRight: 10}}
            onPress={() => navigation.toggleDrawer()}
            name="search"
            size={30}
          />
        ),
        headerStyle: {
          backgroundColor: 'white',
        },
      };
    },
  },
);

const AppDrawerNavigator = createMaterialBottomTabNavigator(
  {
    Case: {
      screen: CaseNavigator,
      navigationOptions: {
        title: 'Home',
        tabBarIcon: ({tintColor}) => {
          return <Icon name="home" size={25} color={tintColor} />;
        },
      },
    },
    Contact: {
      screen: ContactNavigator,
      navigationOptions: {
        title: 'Drug',
        tabBarIcon: ({tintColor}) => {
          return <Icon name="home" size={25} color={tintColor} />;
        },
      },
    },
    Hospital: {
      screen: HospitalNavigator,
      navigationOptions: {
        title: 'Search',
        tabBarIcon: ({tintColor}) => {
          return <Icon name="search" size={25} color={tintColor} />;
        },
      },
    },
    Notification: {
      screen: NotificationNavigator,
      navigationOptions: {
        title: 'Disease',
        tabBarIcon: ({tintColor}) => {
          return <Icon name="stethoscope" size={25} color={tintColor} />;
        },
      },
    },
    Testing: {
      screen: TestingNavigator,
      navigationOptions: {
        title: 'Profile',
        tabBarIcon: ({tintColor}) => {
          return <Icon name="user" size={25} color={tintColor} />;
        },
      },
    },
  },
  {
    //drawerWidth: Math.round(Dimensions.get("window").width) * 0.75,
    shifting: false,
    activeColor: 'white',
    inactiveColor: 'black',

    barStyle: {
      backgroundColor: '#00ACEE',
      padding: 0,
    },
    itemsContainerStyle: {
      marginVertical: 30,
    },
    labelStyle: {
      fontSize: 10,
    },
  },
);

export const createRootNavigator = () => {
  return createAppContainer(
    createSwitchNavigator({
      SignedIn: {
        screen: AppDrawerNavigator,
      },
    }),
  );
};
