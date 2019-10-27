import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
  ImageBackground,
} from 'react-native';

import { MonoText } from '../components/StyledText';
import { AsyncStorage } from 'react-native';

var delete_me_later = "unset";
// function onChangeText() {
//   console.log('todo!');
// }

export default function RequestFavor(props) {
  const [value1, onChangeText] = React.useState('');
  const [value2, onChangeText2] = React.useState('Enter location');
  const [value3, onChangeText3] = React.useState('Enter price');
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/images/splashscreen.png')} style={{ width: '100%', height: '100%' }}>
        <ScrollView
          style={styles.container}
          contentContainerStyle={styles.contentContainer}>


          <View style={styles.getStartedContainer}>
            <DevelopmentModeNotice />

          </View>

          <View style={styles.helpContainer}>
            <TouchableOpacity onPress={() => props.navigation.navigate('Complete')}>
              <Text style={styles.helpLinkText}>
                Type request below:
              </Text>
              {<TextInput
                style={{ backgroundColor: '#ffffff', top:60, left: 13, width: 300, height: 130, borderColor: 'gray', borderWidth: 1, paddingVertical: 15 }}
                onChangeText={text1 => onChangeText(text1)}
                value1={value1}
              />}

              <Text style= {styles.helpLinkText}>
                Add location below:
              </Text>
              { <TextInput
                style={{backgroundColor: '#ffffff', top:60, left: 13, width: 300, height: 130, borderColor: 'gray', borderWidth: 1, paddingVertical: 15 }}
                onChangeText2={text2 => onChangeText2(text2)}
                value2={value2}
              />}
     
              <Text style={styles.helpLinkText}>
                Any price applicable:
              </Text>
              { <TextInput
                style={{backgroundColor: '#ffffff', top:60, left: 13, width: 300, height: 90,  borderColor: 'gray', borderWidth: 1, paddingVertical: 15 }}
                onChangeText3={text3 => onChangeText3(text3)}
                value3={value3}
              /> }
            </TouchableOpacity>

          </View>

            <View style={styles.submitButton} >
              <TouchableOpacity onPress={() => {
                  delete_me_later = 'before first async';
                  async () => {
                    try {
                      const requestTable = await AsyncStorage.getItem('@request_table')
                      if(requestTable !== null) {
                        // value previously stored
                        requestTable.push({
                          key: value1,
                          location: value2,
                          price: value3,
                          inProgress: false,
                        });
                      } else {
                        let requestTable = [];
                        requestTable.push({
                          key: value1,
                          location: value2,
                          price: value3,
                          inProgress: false,
                        });
                        delete_me_later = 'before nested async';
                        async () => {
                          try {
                            delete_me_later = 'hlkjsa;lfk';
                            delete_me_later = value1;
                            await AsyncStorage.setItem('@request_table', requestTable);
                          } catch (e) {
                            // saving error
                            console.log(e);
                          }
                      };
                    } } catch(e) {
                      // error reading value
                      console.log(e);
                    }
                  };
                props.navigation.navigate('Home')}
              }>

            <Text style={styles.submittext}>
                {delete_me_later}// change back to Submit
              </Text>
            </TouchableOpacity>
          </View>

            <View style={styles.backHomeButton}>
                        <TouchableOpacity onPress={() => props.navigation.navigate('Home')}>

            <Text style={styles.backhome}>
                Back Home
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

RequestFavor.navigationOptions = {
  header: null,
};

function DevelopmentModeNotice() {
  if (__DEV__) {

    return (
      <Text style={styles.developmentModeText}>
        Request a Favor
      </Text>
    );
  } else {
    return (
      <Text style={styles.developmentModeText}>
        Request a Favor
      </Text>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
  },
  getStartedContainer: {
    position: 'absolute',
    width: 300,
    left: 36,
    top: 20
  },
  developmentModeText: {
    position: 'absolute',
    width: 300,
    fontFamily: 'Didact Gothic',
    textAlign: 'center',
    lineHeight: 24,
    fontSize: 18,
    backgroundColor: '#93b8bd',
    height: 57,
    left: 36,
    top: 80,
    borderBottomColor: 'rgba(255, 255, 255, 1)',
    borderRadius: 6,
  },
  submitButton: {
    position: 'absolute',
    backgroundColor: 'green',
    height: 70,
    width: 150,
    top: 600,
    fontColor: '#ffffff',
    left: 65,
  },
  backhome: {
    textAlign: 'center',
    fontColor: '#ffffff',
    color: '#ffffff',
    top: 20,
  },
  submittext: {
    fontColor: '#ffffff',
    color: '#ffffff',
    textAlign: 'center',
    top: 20, 
  },
  backHomeButton: {
    position: 'absolute',
    backgroundColor: '#93b8bd',
    width: 150,
    height: 70,
    top:600, 
    left: 230,
    fontColor: '#ffffff'
  },
  helpContainer: {
    marginTop: 100,
    alignItems: 'center',
  },
  helpLinkText: {
    fontSize: 14,
    fontFamily: 'Didact Gothic',
    color: '#000000',
    textAlign: 'center',
    left: 16,
    top: 60,
  },
});
