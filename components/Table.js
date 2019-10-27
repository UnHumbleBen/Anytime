import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Table, TableWrapper, Row, Rows, Col } from 'react-native-table-component';

export default class RequestTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tableHead: ['REQUESTS', 'STATUS'],
      widthArr: [40, 40]
    }
  }

  render() {
    const listOfRequests = this.props.listOfRequests;
    const state = this.state;
    const tableData = [];
    for (request in listOfRequests) {
      rowData.push(request.name);
      if (request.inProgress) {
        rowData.push('x');
      } else {
        rowData.push('');
      }
      tableData.push(rowData);
    }

    return (
      <View style={styles.container}>
        <ScrollView horizontal={true}>
          <View>
            <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
              <Row data={state.tableHead} widthArr={state.widthArr} style={styles.header} textStyle={styles.text} />
            </Table>
            <ScrollView style={styles.dataWrapper}>
              <Table borderStyle={{ borderWidth: 1, borderColor: '#C1C0B9' }}>
                {
                  tableData.map((rowData, index) => (
                    <Row
                      key={index}
                      data={rowData}
                      widthArr={state.widthArr}
                      style={[styles.row, index % 2 && { backgroundColor: '#F7F6E7' }]}
                      textStyle={styles.text}
                    />
                  ))
                }
              </Table>
            </ScrollView>
          </View>
        </ScrollView>
      </View>
    )
  }
}
