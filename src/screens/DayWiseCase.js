import React, {Component} from 'react';
import {StyleSheet, View, ActivityIndicator, ScrollView} from 'react-native';
import {Divider, Text, Title, DataTable} from 'react-native-paper';

class DayWiseCase extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dayWiseData: null,
      isLoading: true,
    };
  }

  componentDidMount() {
    return fetch('https://api.rootnet.in/covid19-in/stats/history', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          dayWiseData: responseJson,
        });
      });
  }

  static navigationOptions = {
    title: 'Day Wise Cases   ',
  };
  render() {
    const {isLoading, dayWiseData} = this.state;
    //var arrayData = dayWiseData.data;
    // arrayData.reverse();
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
              <Title style={styles.title}>COVID-19 Day Wise Cases</Title>
              <DataTable>
                <Text style={{textAlign: 'right'}}>
                  Last Updated on:{' '}
                  {dayWiseData.lastOriginUpdate.substring(0, 10)}
                  &nbsp;&nbsp;&nbsp;&nbsp;
                </Text>
                <DataTable.Header>
                  <DataTable.Title style={{width: 40}}>Date</DataTable.Title>
                  <DataTable.Title numeric>Total</DataTable.Title>
                  <DataTable.Title numeric>Discharged</DataTable.Title>
                  <DataTable.Title numeric>Deaths</DataTable.Title>
                </DataTable.Header>
                {dayWiseData.data.reverse().map((data) => {
                  return (
                    <DataTable.Row key={data.day}>
                      <DataTable.Cell>{data.day}</DataTable.Cell>
                      <DataTable.Cell numeric="true">
                        {data.summary.total}
                      </DataTable.Cell>
                      <DataTable.Cell numeric>
                        {data.summary.discharged}
                      </DataTable.Cell>
                      <DataTable.Cell numeric>
                        {data.summary.deaths}
                      </DataTable.Cell>
                    </DataTable.Row>
                  );
                })}
              </DataTable>

              <Divider />
              <Text style={{textAlign: 'center'}}>End of Data</Text>
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

export default DayWiseCase;
