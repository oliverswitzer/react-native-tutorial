/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 */
'use strict';

var React = require('react-native');
var Main = require('./app/components/Main.js');

var {
  AppRegistry,
  StyleSheet,
  NavigatorIOS,
  Text,
  View,
} = React;

class reactNativeTutorial extends React.Component{
  render() {
    return (
      <View style={styles.container}>
        <NavigatorIOS
          style={styles.container}
          initialRoute={{
            title: "React Native Tutorial",
            component: Main
          }} />
      </View>
    );
  }
};

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#111111',
  }
});

AppRegistry.registerComponent('react_native_tutorial', () => reactNativeTutorial);
