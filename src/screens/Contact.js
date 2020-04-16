import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  ScrollView,
  Platform,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {Divider, Text, Title} from 'react-native-paper';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactData: null,
      isLoading: true,
    };
  }

  dialCall = (num) => {
    let phoneNumber = '';

    if (Platform.OS === 'android') {
      phoneNumber = 'tel:$' + num;
    } else {
      phoneNumber = 'telprompt:$' + num;
    }

    Linking.openURL(phoneNumber);
  };

  componentDidMount() {
    return fetch('https://api.rootnet.in/covid19-in/contacts', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          contactData: responseJson,
        });
      });
  }

  static navigationOptions = {
    title: 'Contacts   ',
  };
  render() {
    const {isLoading} = this.state;
    return (
      <View style={styles.container}>
        {isLoading ? (
          <ActivityIndicator
            size="large"
            color="red"
            style={styles.activityBar}
          />
        ) : (
          <React.Fragment>
            <ScrollView>
              <Title style={styles.title}>
                Offical Contact Info and Social Media Handles:
              </Title>
              <TouchableOpacity
                onPress={this.dialCall(9652522157)}
                activeOpacity={0.7}>
                <Text>OPEN PHONE NUMBER IN DIAL SCREEN</Text>
              </TouchableOpacity>
            </ScrollView>
          </React.Fragment>
        )}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: '#00ACEE',
    margin: 5,
  },
  activityBar: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
});

export default Contact;
