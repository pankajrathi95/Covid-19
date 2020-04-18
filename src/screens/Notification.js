import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
  ScrollView,
} from 'react-native';
import {Divider, Text, Title} from 'react-native-paper';

class Notification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newsData: [],
      isLoading: true,
    };
  }

  componentDidMount() {
    return fetch('https://api.rootnet.in/covid19-in/notifications', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          newsData: responseJson,
        });
      });
  }

  renderRow(datum, count) {
    return (
      <React.Fragment>
        <View key={datum.link} style={{flex: 1, flexDirection: 'row'}}>
          <Text>{datum.loc}</Text>
          <TouchableOpacity
            style={{marginBottom: 5}}
            activeOpacity={0.7}
            onPress={() => {
              Linking.openURL(datum.link);
            }}>
            <Text>{count + '. ' + datum.title}</Text>
          </TouchableOpacity>
        </View>
      </React.Fragment>
    );
  }

  static navigationOptions = {
    title: 'Notifications   ',
  };
  render() {
    const {isLoading, newsData} = this.state;
    return (
      <ScrollView>
        <View style={styles.container}>
          {isLoading ? (
            <ActivityIndicator
              size="large"
              color="red"
              style={styles.activityBar}
            />
          ) : (
            <React.Fragment>
              <Title style={styles.title}>
                Recent Notifications from the Government of India
              </Title>
              <Text style={{fontWeight: 'bold'}}>
                Click on any of the following text to see the corresponding data
              </Text>
              <View style={{margin: 10}}>
                {newsData.data.notifications.map((datum, index) => {
                  // This will render a row for each data element.
                  return this.renderRow(datum, index + 1);
                })}
              </View>
            </React.Fragment>
          )}
        </View>
      </ScrollView>
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
    fontSize: 16,
  },
  activityBar: {
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
    padding: 10,
  },
});

export default Notification;
