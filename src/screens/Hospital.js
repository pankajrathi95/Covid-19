import React, {Component} from 'react';
import {
  StyleSheet,
  View,
  ActivityIndicator,
  Dimensions,
  ScrollView,
} from 'react-native';
import {Divider, Text, Title} from 'react-native-paper';

class Hospital extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hospitalData: null,
      isLoading: true,
    };
  }

  numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  componentDidMount() {
    return fetch('https://api.rootnet.in/covid19-in/hospitals/beds', {
      method: 'GET',
    })
      .then((response) => response.json())
      .then((responseJson) => {
        this.setState({
          isLoading: false,
          hospitalData: responseJson,
        });
      });
  }

  static navigationOptions = {
    title: 'Hospitals   ',
  };
  render() {
    const {isLoading, hospitalData} = this.state;
    const screenWidth = Math.round(Dimensions.get('window').width);
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
                India Wide Hospitals and Beds Stats:
              </Title>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  marginLeft: 10,
                  marginTop: 10,
                  marginBottom: 10,
                  marginRight: 10,
                }}>
                <View
                  style={{
                    width: (screenWidth - 30) / 2,
                    height: (screenWidth - 50) / 2,
                    backgroundColor: 'powderblue',
                    marginRight: 10,
                  }}>
                  <Text style={{textAlign: 'center', fontSize: 40, margin: 15}}>
                    {this.numberWithCommas(
                      hospitalData.data.summary.totalHospitals,
                    )}
                  </Text>
                  <Text style={{textAlign: 'center', fontSize: 22, margin: 15}}>
                    Total Hospitals
                  </Text>
                </View>
                <View
                  style={{
                    width: (screenWidth - 30) / 2,
                    height: (screenWidth - 50) / 2,
                    backgroundColor: 'skyblue',
                  }}>
                  <Text
                    style={{textAlign: 'center', fontSize: 38, marginTop: 15}}>
                    {this.numberWithCommas(hospitalData.data.summary.totalBeds)}
                  </Text>
                  <Text
                    style={{
                      textAlign: 'center',
                      fontSize: 22,
                      margin: 25,
                    }}>
                    Total Beds
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  marginLeft: 10,
                  marginRight: 10,
                  marginBottom: 10,
                }}>
                <View
                  style={{
                    width: (screenWidth - 30) / 2,
                    height: (screenWidth - 50) / 2,
                    backgroundColor: 'skyblue',
                    marginRight: 10,
                  }}>
                  <Text style={{textAlign: 'center', fontSize: 40, margin: 15}}>
                    {this.numberWithCommas(
                      hospitalData.data.summary.ruralHospitals,
                    )}
                  </Text>
                  <Text style={{textAlign: 'center', fontSize: 22, margin: 15}}>
                    Rural Hospitals
                  </Text>
                </View>
                <View
                  style={{
                    width: (screenWidth - 30) / 2,
                    height: (screenWidth - 50) / 2,
                    backgroundColor: 'powderblue',
                  }}>
                  <Text style={{textAlign: 'center', fontSize: 40, margin: 15}}>
                    {this.numberWithCommas(hospitalData.data.summary.ruralBeds)}
                  </Text>
                  <Text style={{textAlign: 'center', fontSize: 22, margin: 15}}>
                    Rural Beds
                  </Text>
                </View>
              </View>
              <View
                style={{
                  flex: 1,
                  flexDirection: 'row',
                  marginLeft: 10,
                  marginRight: 10,
                }}>
                <View
                  style={{
                    width: (screenWidth - 30) / 2,
                    height: (screenWidth - 50) / 2,
                    backgroundColor: 'powderblue',
                    marginRight: 10,
                  }}>
                  <Text style={{textAlign: 'center', fontSize: 40, margin: 15}}>
                    {this.numberWithCommas(
                      hospitalData.data.summary.urbanHospitals,
                    )}
                  </Text>
                  <Text style={{textAlign: 'center', fontSize: 22, margin: 15}}>
                    Urban Hospitals
                  </Text>
                </View>
                <View
                  style={{
                    width: (screenWidth - 30) / 2,
                    height: (screenWidth - 50) / 2,
                    backgroundColor: 'skyblue',
                  }}>
                  <Text style={{textAlign: 'center', fontSize: 40, margin: 15}}>
                    {this.numberWithCommas(hospitalData.data.summary.urbanBeds)}
                  </Text>
                  <Text style={{textAlign: 'center', fontSize: 22, margin: 15}}>
                    Urban Beds
                  </Text>
                </View>
              </View>
              <Text style={{textAlign: 'right'}}>
                Last Updated on:{' '}
                {hospitalData.lastOriginUpdate.substring(0, 10)}
                &nbsp;&nbsp;&nbsp;&nbsp;
              </Text>
              <Text style={{textAlign: 'center', margin: 5, marginTop: 50}}>
                This data corresponds to only Goverment/public hospitals and
                beds{'\n'}
              </Text>
              <Divider style={{marginBottom: 10}} />
              <Text
                style={{textAlign: 'center', margin: 5}}
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

export default Hospital;
