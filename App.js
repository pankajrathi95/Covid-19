import React from 'react';
import {Provider as PaperProvider} from 'react-native-paper';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
//import { createStackNavigator } from '@react-navigation/stack';

import Icon from 'react-native-vector-icons/FontAwesome';
import IconA from 'react-native-vector-icons/AntDesign';
import IconE from 'react-native-vector-icons/Entypo';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs';

//Import your Screen here
import Case from './src/screens/Case';
import Contact from './src/screens/Contact';
import Hospital from './src/screens/Hospital';
import Notification from './src/screens/Notification';
import Testing from './src/screens/Testing';
import About from './src/screens/About';
import DayWiseCase from './src/screens/DayWiseCase';

const CaseNavigator = createStackNavigator(
  {
    CaseNavigator: Case,
  },
  {
    defaultNavigationOptions: ({navigation}) => {
      return {
        headerRight: (
          <IconE
            style={{paddingRight: 10}}
            onPress={() => navigation.push('About')}
            name="info-with-circle"
            size={30}
          />
        ),
        headerStyle: {
          backgroundColor: '#00ACEE',
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
          <IconE
            style={{paddingRight: 10}}
            onPress={() => navigation.push('About')}
            name="info-with-circle"
            size={30}
          />
        ),
        headerStyle: {
          backgroundColor: '#00ACEE',
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
          <IconE
            style={{paddingRight: 10}}
            onPress={() => navigation.push('About')}
            name="info-with-circle"
            size={30}
          />
        ),
        headerStyle: {
          backgroundColor: '#00ACEE',
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
          <IconE
            style={{paddingRight: 10}}
            onPress={() => navigation.push('About')}
            name="info-with-circle"
            size={30}
          />
        ),
        headerStyle: {
          backgroundColor: '#00ACEE',
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
          <IconE
            style={{paddingRight: 10}}
            onPress={() => navigation.push('About')}
            name="info-with-circle"
            size={30}
          />
        ),
        headerStyle: {
          backgroundColor: '#00ACEE',
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
        title: 'Cases',
        tabBarIcon: ({tintColor}) => {
          return <Icon name="line-chart" size={25} color={tintColor} />;
        },
      },
    },
    Testing: {
      screen: TestingNavigator,
      navigationOptions: {
        title: 'Testing',
        tabBarIcon: ({tintColor}) => {
          return <Icon name="thermometer-2" size={25} color={tintColor} />;
        },
      },
    },
    Hospital: {
      screen: HospitalNavigator,
      navigationOptions: {
        title: 'Hospitals',
        tabBarIcon: ({tintColor}) => {
          return <Icon name="hospital-o" size={25} color={tintColor} />;
        },
      },
    },
    Contact: {
      screen: ContactNavigator,
      navigationOptions: {
        title: 'Contacts',
        tabBarIcon: ({tintColor}) => {
          return <IconA name="contacts" size={25} color={tintColor} />;
        },
      },
    },
    Notification: {
      screen: NotificationNavigator,
      navigationOptions: {
        title: 'Notification',
        tabBarIcon: ({tintColor}) => {
          return <IconA name="notification" size={25} color={tintColor} />;
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

const Stack = createStackNavigator({
  Home: {
    screen: AppDrawerNavigator,
    navigationOptions: {
      header: null,
    },
  },
  DayWiseCase: DayWiseCase,
  About: About,
});

const Layout = createAppContainer(Stack);

export default class App extends React.Component {
  state = {};

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <PaperProvider>
        <Layout />
      </PaperProvider>
    );
  }
}
