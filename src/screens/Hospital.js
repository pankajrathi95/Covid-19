import React, {Component} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {Divider, Card, Title} from 'react-native-paper';

class Hospital extends Component {
  constructor(props) {
    super(props);
    this.state = {
      drugData: [],
      isLoading: false,
    };
  }
  static navigationOptions = {
    title: 'Hospital   ',
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
            <Title style={styles.title}>Recently Added Drugs</Title>
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

export default Hospital;
