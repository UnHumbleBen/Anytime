import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { SplashScreen } from 'expo';
import { Asset } from 'expo-asset';

export default class AnytimeSplashScreen extends React.Component {
  state = {
    isReady: false,
  };

  componentDidMount() {
    SplashScreen.preventAutoHide();
  }

  render() {
    if (!this.state.isReady) {
      return (
        <View>
          <Image style={styles.container}
            source={require('../assets/images/AnytimeHome.png')}
            onLoad={this._cacheResourcesAsync}
          />
        </View>
      );
    }

    return (
      <View>
        <Image style={styles.container}
          source={require('../assets/images/AnytimeHome.png')} />
      </View>
    );
  }

  _cacheSplashResourcesAsync = async () => {
    const gif = require('../assets/images/AnytimeHome.png');
    return Asset.fromModule(gif).downloadAsync();
  };

  _cacheResourcesAsync = async () => {
    SplashScreen.hide();
    const images = [
      require('../assets/images/AnytimeHome.png'),
    ];

    const cacheImages = images.map(image => {
      return Asset.fromModule(image).downloadAsync();
    });

    await Promise.all(cacheImages);
    this.setState({ isReady: true });
  };
}
const styles = StyleSheet.create({
  container: {
    alignContent: 'center',
    margin: 'auto',
    paddingTop: 0,
    width: 500,
    height: 700
  }
});
