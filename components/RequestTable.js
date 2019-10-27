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
        token = JSON.parse(token);
        console.log(token);
        this.setState({
          isLoading: false,
          data: token,
        }, () => {
          console.log("STATE", this.state)
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
<<<<<<< HEAD

    console.log("re-rendered", this.state.data)

=======
>>>>>>> 494804ed92bcda46923ab818dfaee5b814a4e12b
    if (this.state.isLoading || type_error) {
      return (
        <View>
          <Text>{error_message}</Text>
        </View>
      );
<<<<<<< HEAD
    }
    // else if (!type_error) {
    //   return (
    //     <View>
    //       <Text>{token_value}</Text>
    //     </View>
    //   );
    // }


=======
    } else if (!type_error) {
      return (
        <View>
          <Text>{token_value}</Text>
        </View>
      );
    }
>>>>>>> 494804ed92bcda46923ab818dfaee5b814a4e12b
    let dataDrawn;
    if (this.state.data !== null) {
      // value previously stored
      dataDrawn = this.state.data;
<<<<<<< HEAD
      console.log("DATA DRAWN", dataDrawn)
    } else {
      console.log("dataa drawn empty")
=======
    } else {
>>>>>>> 494804ed92bcda46923ab818dfaee5b814a4e12b
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
<<<<<<< HEAD
});
=======
});
>>>>>>> 494804ed92bcda46923ab818dfaee5b814a4e12b
