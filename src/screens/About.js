import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  TouchableOpacity,
  Linking,
} from 'react-native';
import {Divider, Card, Title, Text} from 'react-native-paper';
import {Icon} from 'react-native-vector-icons/FontAwesome';

class About extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drugData: [],
      isLoading: false,
    };
  }
  static navigationOptions = {
    title: 'About   ',
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
            <Title style={styles.title}>About this App:</Title>

            <Text style={{margin: 10}}>
              This App has been developed by Pankaj Rathi.{'\n\n\n'} For any
              Feedback, Queries and Suggestions. Write me at{' '}
              <Text
                style={{color: '#00ACEE'}}
                onPress={() => {
                  Linking.openURL('mailto:pankaj_rathi@outlook.com');
                }}>
                pankaj_rathi@outlook.com
              </Text>
              <Text
                style={{textAlign: 'center'}}
                onPress={() => Linking.openURL('https://www.mohfw.gov.in/')}>
                {'\n\n\n'}The data has been collected from the &nbsp;
                <Text style={{color: '#00ACEE'}}>
                  Ministry of Health and Family Welfare, Government of India.
                </Text>
              </Text>
            </Text>
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

export default About;
