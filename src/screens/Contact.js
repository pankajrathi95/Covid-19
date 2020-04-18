/* eslint-disable space-infix-ops */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  ScrollView,
  Linking,
  TouchableOpacity,
} from 'react-native';
import {Text, Title, Divider} from 'react-native-paper';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contactData: null,
      isLoading: true,
    };
  }

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

  renderRow(datum) {
    return (
      <React.Fragment>
        <View style={{flex: 1, alignSelf: 'stretch', flexDirection: 'row'}}>
          <View style={{flex: 1, alignSelf: 'stretch'}}>
            <Text>{datum.loc}</Text>
          </View>
          {/* Edit these as they are your cells. You may even take parameters to display different data / react elements etc. */}
          <View style={{flex: 1, alignSelf: 'stretch'}}>
            <TouchableOpacity
              activeOpacity={0.7}
              onPress={() => {
                Linking.openURL('tel:' + datum.number);
              }}>
              <Text>{datum.number}</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View
          style={{
            borderBottomWidth: 1,
            borderBottomColor: 'black',
            width: 400,
          }}
        />
      </React.Fragment>
    );
  }

  static navigationOptions = {
    title: 'Contacts   ',
  };
  render() {
    const {isLoading, contactData} = this.state;
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
              <View style={styles.viewRow}>
                <Text>India-wide Contact Number: </Text>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    Linking.openURL(
                      'tel:' + contactData.data.contacts.primary.number,
                    );
                  }}>
                  <Text>{contactData.data.contacts.primary.number}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.viewRow}>
                <Text>India-wide Contact Number (Toll-free): </Text>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    Linking.openURL('tel:1075');
                  }}>
                  <Text>1075</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.viewRow}>
                <Text>Email: </Text>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    Linking.openURL(
                      'mailto:' + contactData.data.contacts.primary.email,
                    );
                  }}>
                  <Text>{contactData.data.contacts.primary.email}</Text>
                </TouchableOpacity>
              </View>
              <View style={styles.viewRow}>
                <Text>Twitter: </Text>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    Linking.openURL(contactData.data.contacts.primary.twitter);
                  }}>
                  <Text
                    style={{color: 'blue', textDecorationLine: 'underline'}}>
                    {contactData.data.contacts.primary.twitter}
                  </Text>
                </TouchableOpacity>
              </View>
              <View style={styles.viewRow}>
                <Text>Facebook: </Text>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => {
                    Linking.openURL(contactData.data.contacts.primary.facebook);
                  }}>
                  <Text
                    style={{color: 'blue', textDecorationLine: 'underline'}}>
                    {contactData.data.contacts.primary.facebook}
                  </Text>
                </TouchableOpacity>
              </View>
              <Divider style={{marginBottom: 10}} />
              <View
                style={{
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                {contactData.data.contacts.regional.map((datum) => {
                  // This will render a row for each data element.
                  return this.renderRow(datum);
                })}
              </View>
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
  viewRow: {
    flexDirection: 'row',
    marginLeft: 15,
    marginRight: 15,
    marginBottom: 5,
  },
});

export default Contact;
