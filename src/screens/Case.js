/* eslint-disable prettier/prettier */
import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  ScrollView,
  Linking,
} from 'react-native';
import {
  Text,
  Card,
  Title,
  Paragraph,
  Divider,
  Button,
  DataTable,
} from 'react-native-paper';

class Case extends Component {
  constructor(props) {
    super(props);
    this.state = {
      caseData: null,
      isLoading: true,
    };
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  componentDidMount() {
    return fetch('https://api.rootnet.in/covid19-in/stats/latest', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          caseData: responseJson,
        });
      });
  }
  static navigationOptions = {
    title: 'Cases   ',
  };
  render() {
    const {isLoading, caseData} = this.state;
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
              <Title style={styles.title}>COVID-19 India Cases:</Title>
              <Divider inset={true} />
              <Card>
                <Card.Content>
                  <Title style={{color: 'blue'}}>
                    {this.numberWithCommas(caseData.data.summary.total)}
                  </Title>
                  <Paragraph>Total Cases</Paragraph>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Title style={{color: 'green'}}>
                    {this.numberWithCommas(caseData.data.summary.discharged)}
                  </Title>
                  <Paragraph>Total Discharged</Paragraph>
                </Card.Content>
              </Card>
              <Card>
                <Card.Content>
                  <Title style={{color: 'red'}}>
                    {this.numberWithCommas(caseData.data.summary.deaths)}
                  </Title>
                  <Paragraph>Total Deaths</Paragraph>
                </Card.Content>
              </Card>
              <Text style={{textAlign: 'right'}}>
                Last Updated on: {caseData.lastOriginUpdate.substring(0, 10)}
                &nbsp;&nbsp;&nbsp;&nbsp;
              </Text>
              <Divider />
              <Button
                mode="text"
                color="#00ACEE"
                onPress={() => this.props.navigation.push('DayWiseCase')}>
                View Day wise Data
              </Button>
              <Divider style={{marginBottom: 15}} />
              <Title style={{marginTop: 15, textAlign: 'center'}}>
                State wise data
              </Title>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title style={{width: 40}}>State</DataTable.Title>
                  <DataTable.Title numeric>Total</DataTable.Title>
                  <DataTable.Title numeric>Discharged</DataTable.Title>
                  <DataTable.Title numeric>Deaths</DataTable.Title>
                </DataTable.Header>
                {caseData.data.regional.map((data) => {
                  return (
                    <DataTable.Row key={data.loc}>
                      <DataTable.Cell>{data.loc}</DataTable.Cell>
                      <DataTable.Cell numeric="true">
                        {data.totalConfirmed}
                      </DataTable.Cell>
                      <DataTable.Cell numeric>{data.discharged}</DataTable.Cell>
                      <DataTable.Cell numeric>{data.deaths}</DataTable.Cell>
                    </DataTable.Row>
                  );
                })}
              </DataTable>
              <Text style={{textAlign: 'right'}}>
                Last Updated on: {caseData.lastOriginUpdate.substring(0, 10)}
                &nbsp;&nbsp;&nbsp;&nbsp;
              </Text>
              <Divider inset="true" />
              <Text
                style={{textAlign: 'center', margin: 5, marginTop: 50}}
                onPress={() => Linking.openURL('https://www.mohfw.gov.in/')}>
                This data has been collected from the{'\n'}
                <Text style={{color: '#00ACEE'}}>
                  Ministry of Health and Family Welfare,{'\n'}
                  Government of India.
                </Text>
              </Text>
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

export default Case;
