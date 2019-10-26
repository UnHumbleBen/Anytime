import React from 'react';
import { Image, Text, View, StyleSheet } from 'react-native';
import { SplashScreen } from 'expo';
import { Asset } from 'expo-asset';

export default class App extends React.Component {
  state = {
    isReady: false,
  };

  componentDidMount() {
    SplashScreen.preventAutoHide();
  }

  render() {
    if (!this.state.isReady) {
      return (
        <View style={{ flex: 1 }}>
          <Image style={styles.container}
            source={require('../assets/images/splashscreen.png')}
            onLoad={this._cacheResourcesAsync}
          />
        </View>
      );
    }

    return (
      <View style={{ flex: 1 }}>
        <Image source={require('../assets/images/splashscreen.png')} />
      </View>
    );
  }

  _cacheSplashResourcesAsync = async () => {
    const gif = require('../assets/images/splashscreen.png');
    return Asset.fromModule(gif).downloadAsync();
  };

  _cacheResourcesAsync = async () => {
    SplashScreen.hide();
    const images = [
      require('../assets/images/splashscreen.png'),
      require('../assets/image/splashscreen.png'),
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
    paddingTop: 0,
    width: 410,
    height: 800
  },
});
