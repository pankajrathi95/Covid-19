import React, {Component} from 'react';
import {StyleSheet, View, ActivityIndicator} from 'react-native';
import {Divider, Card, Title, Paragraph, Text} from 'react-native-paper';

class Testing extends Component {
  constructor(props) {
    super(props);
    this.state = {
      testingData: null,
      isLoading: true,
    };
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  componentDidMount() {
    return fetch('https://api.rootnet.in/covid19-in/stats/testing/latest', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          testingData: responseJson,
        });
      });
  }

  static navigationOptions = {
    title: 'Testing   ',
  };
  render() {
    const {isLoading, testingData} = this.state;
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
            <Title style={styles.title}>India Wide Corona Testing Stats:</Title>
            <Divider inset={true} />
            <Card>
              <Card.Content>
                <Title style={{color: 'green'}}>
                  {this.numberWithCommas(testingData.data.totalSamplesTested)}
                </Title>
                <Paragraph>Total Samples Tested</Paragraph>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Title style={{color: 'blue'}}>
                  {this.numberWithCommas(
                    testingData.data.totalIndividualsTested,
                  )}
                </Title>
                <Paragraph>Total Individuals Tested</Paragraph>
              </Card.Content>
            </Card>
            <Card>
              <Card.Content>
                <Title style={{color: 'red'}}>
                  {this.numberWithCommas(testingData.data.totalPositiveCases)}
                </Title>
                <Paragraph>Total Positive Cases</Paragraph>
              </Card.Content>
            </Card>
            <Text style={{textAlign: 'right'}}>
              Last Updated on: {testingData.lastOriginUpdate.substring(0, 10)}
              &nbsp;&nbsp;&nbsp;&nbsp;
            </Text>
            <Divider style={{marginBottom: 15}} />
            <Text
              style={{textAlign: 'center', margin: 5, marginTop: 50}}
              onPress={() => Linking.openURL('https://www.mohfw.gov.in/')}>
              This data has been collected from the{'\n'}
              <Text style={{color: '#00ACEE'}}>
                Ministry of Health and Family Welfare,{'\n'}
                Government of India.
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

export default Testing;
