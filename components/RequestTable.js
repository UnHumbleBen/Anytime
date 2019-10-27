import React, { Component } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { AsyncStorage } from 'react-native';

var error_message = "hello";
  var type_error = false;
  var token_value = "unset";
export default class FlatListBasics extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: true,
      data: [],
    }
    try {
      AsyncStorage.getItem('@request_table').then(token => {
        this.setState({
          isLoading: false,
          data: token,
        });
        token_value = token;
      });
    } catch (error) {
      console.error(error);
      error_message = console.trace();
      type_error = true;
    }
  }

  // state = {
  //   isLoading: true,
  //   data: [],
  // };

  
  // async componentDidMount() {
  //   try {
  //     await AsyncStorage.getItem('@request_table').then(token => {
  //       this.setState({
  //         isLoading: false,
  //         data: token,
  //       });
  //     });
  //   } catch (error) {
  //     console.error(error);
  //     error_message = console.trace();
  //     type_error = true;
  //   }
  // }

  render() {
    if (this.state.isLoading || type_error) {
      return (
        <View>
          <Text>{error_message}</Text>
        </View>
      );
    } else if (!type_error) {
      return (
        <View>
          <Text>{token_value}</Text>
        </View>
      );
    }
    let dataDrawn;
    if (this.state.data !== null) {
      // value previously stored
      dataDrawn = this.state.data;
    } else {
      dataDrawn = [];
    }
    return (
      <View style={styles.container}>
        <FlatList
          data={dataDrawn}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 22,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
});
