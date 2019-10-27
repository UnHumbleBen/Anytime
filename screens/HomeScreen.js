import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Button,
  ImageBackground,
} from 'react-native';

import { MonoText } from '../components/StyledText';

export default function HomeScreen(props) {
  const [listOfRequests, onChangeList] = React.useState({});

  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/splashscreen.png')} style={{ width: '100%', height: '100%' }}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>

          <View style={styles.getStartedContainer}>
            <DevelopmentModeNotice />

          </View>

          <View style={styles.helpContainer1}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Request', { callback: onChangeList, data: listOfRequests })} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>
                Requesting a Favor
            </Text>
            </TouchableOpacity>
          </View>



          <View style={styles.helpContainer2}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Complete', { listOfRequests: listOfRequests })} style={styles.helpLink}>
              <Text style={styles.helpLinkText}>
                Completing a Favor
            </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>

        {/* <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>
            This is a tab bar. You can edit it in:
          </Text>

          <View
            style={[styles.codeHighlightContainer, styles.navigationFilename]}>
            <MonoText style={styles.codeHighlightText}>
              navigation/MainTabNavigator.js
          </MonoText>
          </View>
        </View> */}
      </ImageBackground>
    </View >
  );
}

HomeScreen.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  return (
    <View style={styles.topPrompt}>
      <Text style={styles.developmentModeText}>
        What are you here for today?
      </Text>
    </View>
  );
}

function handleHelpPress() {

  return <Button
    title="Requesting a Favor"
    onPress={() => this.props.navigation.navigate('Request')}
  />
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  developmentModeText: {
    position: 'relative',
    width: 300,
    fontSize: 18,
    height: 57,
    left: 37,
    top: 23,
    borderBottomColor: 'rgba(255, 255, 255, 1)'
  },
  contentContainer: {
    paddingTop: 30,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  helpContainer1: {
    position: 'absolute',
    width: 300,
    height: 288,
    left: 59,
    top: 138,
    backgroundColor: '#b5e0e6',
    borderColor: 'rgba(255, 255, 255, 1)',
  },
  helpContainer2: {
    position: 'absolute',
    width: 300,
    height: 288,
    left: 59,
    top: 479,
    backgroundColor: '#b5e0e6',
    borderColor: 'rgba(255, 255, 255, 1)',
  },
  helpLink: {
    paddingVertical: 15,
  },
  topPrompt: {
    width: 300,
    height: 57,
    left: 7,
    top: 29,
    backgroundColor: '#93b8bd',
  },
  helpLinkText: {
    fontSize: 24,
    width: 201,
    height: 31,
    left: 51,
    top: 116,
    color: '#000000',
  },
});
